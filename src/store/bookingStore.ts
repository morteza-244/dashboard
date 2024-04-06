import { create } from "zustand";
type TBookingStore = {
  bookingStatus: string;
  sortValue: string;
  setStatus: (value: string) => void;
  setSortValue: (value: string) => void;
};

const useBookingStore = create<TBookingStore>((set) => ({
  bookingStatus: "all",
  sortValue: "",
  setStatus: (value) => set(() => ({ bookingStatus: value })),
  setSortValue: (value) => set(() => ({ sortValue: value })),
}));
export default useBookingStore;
