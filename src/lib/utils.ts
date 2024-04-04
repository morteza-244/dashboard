import { type ClassValue, clsx } from "clsx"
import { formatDistance, parseISO } from "date-fns-jalali";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDistanceFromNow = (dateStr: string) =>
formatDistance(parseISO(dateStr), new Date(), {
  addSuffix: true,
})
  .replace("about ", "")
  .replace("in", "In");