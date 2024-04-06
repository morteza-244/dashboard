import { TBookingQuery } from "@/types";
import supabase from "./supabase";

export const getBookings = async (bookingQuery: TBookingQuery) => {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");
  if (bookingQuery.status !== "all") {
    query = query.eq("status", bookingQuery.status);
  }
  if (bookingQuery.order) {
    query = query.order(bookingQuery.order, { ascending: false });
  }
  const { data, error } = await query;
  if (error) {
    console.log(error.message);
    throw new Error("Bookings could not be loaded");
  }
  return data;
};
