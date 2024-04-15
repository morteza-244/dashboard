import { ReactNode } from "react";
import { Database } from "./supabase";

export type SideLinks = {
  route: string;
  icon: ReactNode;
  label: string;
};

export type TCabin = Database["public"]["Tables"]["cabins"]["Row"];
export type TSetting = Database["public"]["Tables"]["settings"]["Row"];
export type TBooking = Database["public"]["Tables"]["bookings"]["Row"];

export type TNewCabin = {
  id?: number;
  description: string | null;
  discount: number | null;
  image: File | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
};

export type TNewSetting = {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
};

export type TBookingGuests = {
  fullName: string | null;
  email: string | null;
};

export type TCheckInObject = {
  id: number;
  isPaid?: boolean;
  status?: TStatus;
  hasBreakfast?: boolean;
  extrasPrice?: number;
  totalPrice?: number;
};

export type TBookingCabin = {
  name: string | null;
};

export type TBookingQuery = {
  status: string;
  order: string;
  sortType: boolean;
  lastDay: string;
};

export type TUserLogin = {
  email: string;
  password: string;
};

export type TUserSignUp = {
  email: string;
  fullName: string;
  password: string;
};

export type TUpdateUser = {
  password: string;
  fullName: string;
  avatar: File;
};

export type TRecentBooking = {
  created_at: string;
  totalPrice: number | null;
  extrasPrice: number | null;
};

export type TBookingStatus = "CHECKED_IN" | "CHECKED_OUT" | "UNCONFIRMED";
export type TStatus = "checked_in" | "checked_out" | "unconfirmed";
