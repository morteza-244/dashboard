import { PAGE_SIZE } from "@/constants";
import { TBookingQuery, TCheckInObject } from "@/types";
import supabase from "./supabase";

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
    throw new Error("Bookings could not be loaded");
  }
  return { data, count };
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
