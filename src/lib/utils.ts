import { TStartData, TBooking, TTodayBooking } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { formatDistance, parseISO } from "date-fns-jalali";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const formatCurrency = (price: number) =>
  new Intl.NumberFormat("fa-IR", {
    style: "decimal",
    maximumFractionDigits: 2,
  }).format(price) + " تومان";

export const getToday = (options: { end?: boolean }) => {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const prepareData = (startData: TStartData[], stays: TTodayBooking[]) => {
  function incArrayValue(arr: TStartData[], field: number | string) {
    return arr?.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    ?.reduce((arr, cur) => {
      const num = cur.numNights!;
      if (num === 1) return incArrayValue(arr, "1 شب");
      if (num === 2) return incArrayValue(arr, "2 شب");
      if (num === 3) return incArrayValue(arr, "3 شب");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 شب");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 شب");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 شب");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 شب");
      if (num >= 21) return incArrayValue(arr, "21+ شب");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
};
