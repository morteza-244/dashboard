import { ReactNode } from "react";
import { Database } from "./supabase";

export type SideLinks = {
  route: string;
  icon: ReactNode;
  label: string;
};

export type TCabin = Database["public"]["Tables"]["cabins"]["Row"];
export type TNewCabin = {
  description: string | null;
  discount: number | null;
  image: File | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
};
