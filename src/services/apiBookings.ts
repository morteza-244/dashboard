import { PAGE_SIZE } from "@/constants";
import { TBookingQuery, TCheckInObject } from "@/types";
import supabase from "./supabase";
import { getToday } from "@/lib/utils";

export const getBookings = async (
  bookingQuery: TBookingQuery,
  page?: number
) => {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)", { count: "exact" });
  if (bookingQuery.status !== "all") {
    query = query.eq("status", bookingQuery.status);
  }
  if (bookingQuery.order) {
    query = query.order(bookingQuery.order, {
      ascending: bookingQuery.sortType,
    });
  }
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (error) {
    console.log(error.message);
    throw new Error("رزروی یافت نشد");
  }
  return { data, count };
};

export const getBookingAfterDate = async (date: string) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.log(error);
    throw new Error("رزروی یافت نشد");
  }
  return data;
};

export const getStaysAfterDate = async (date: string) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday({}));
  if (error) {
    console.log(error);
    throw new Error("رزروی یافت نشد");
  }
  return data;
};

export const getStaysTodayActivity = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .in("status", ["checked_in", "unconfirmed"])
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
};

export const getBooking = async (id: number) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("رزرو مورد نظر یافت نشد.");
  }
  return data;
};

export const updateBooking = async (updatedBooking: TCheckInObject) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedBooking)
    .eq("id", updatedBooking.id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("رزرو مورد نظر اپدیت نشده است. لطفا دوباره تلاش کنید");
  }
  return data;
};

export const deleteBooking = async (id: number) => {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) {
    throw new Error("رزرو مورد نظر حذف نشد.");
  }
  return data;
};
