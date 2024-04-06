import { TBookingQuery } from "@/types";
import { create } from "zustand";
type TBookingStore = {
  bookingQuery: TBookingQuery;
  setStatus: (value: string) => void;
  setSortValue: (value: string) => void;
};

const useBookingStore = create<TBookingStore>((set) => ({
  bookingQuery: {
    order: "",
    status: "all",
  },
  setStatus: (value) =>
    set((store) => ({
      bookingQuery: { ...store.bookingQuery, status: value },
    })),
  setSortValue: (value) =>
    set((store) => ({ bookingQuery: { ...store.bookingQuery, order: value } })),
}));
export default useBookingStore;
