import supabase from "./supabase";

export const getBookings = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)")
  if (error) {
    console.log(error.message);
    throw new Error("Bookings could not be loaded");
  }
  return data;
};
