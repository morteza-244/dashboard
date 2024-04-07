import { TBookingQuery } from "@/types";
import supabase from "./supabase";
import { PAGE_SIZE } from "@/constants";

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
