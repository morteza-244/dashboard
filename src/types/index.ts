import { ReactNode } from "react";
import { Database } from "./supabase";

export type SideLinks = {
  route: string;
  icon: ReactNode;
  label: string;
};

export type TCabin = Database["public"]["Tables"]["cabins"]["Row"];
