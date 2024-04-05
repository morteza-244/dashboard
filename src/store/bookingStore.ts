import { create } from "zustand";
type TBookingStore = {
  bookingStatus: string;
  setStatus: (value: string) => void;
};

const useBookingStore = create<TBookingStore>((set) => ({
  bookingStatus: "all",
  setStatus: (value) => set(() => ({ bookingStatus: value })),
}));
export default useBookingStore;
