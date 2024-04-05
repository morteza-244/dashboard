import supabase from "./supabase";

export const getBookings = async (status: string) => {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");
  if (status !== "all") {
    query = query.eq("status", status);
  }
  const { data, error } = await query;
  if (error) {
    console.log(error.message);
    throw new Error("Bookings could not be loaded");
  }
  return data;
};
