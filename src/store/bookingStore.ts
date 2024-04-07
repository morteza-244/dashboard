import { TBookingQuery } from "@/types";
import { create } from "zustand";
type TBookingStore = {
  bookingQuery: TBookingQuery;
  setStatus: (value: string) => void;
  setSortValue: (value: string) => void;
  setSortType: (value: boolean) => void;
};

const useBookingStore = create<TBookingStore>((set) => ({
  bookingQuery: {
    order: "",
    status: "all",
    sortType: true,
  },
  setStatus: (value) =>
    set((store) => ({
      bookingQuery: { ...store.bookingQuery, status: value },
    })),
  setSortValue: (value) =>
    set((store) => ({ bookingQuery: { ...store.bookingQuery, order: value } })),
  setSortType: (value) =>
    set((store) => ({
      bookingQuery: { ...store.bookingQuery, sortType: value },
    })),
}));
export default useBookingStore;
