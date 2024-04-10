import { BookingSkeleton } from "@/components/shared";
import Skeleton from "react-loading-skeleton";

const BookingDetailSkeleton = () => {
  return (
    <BookingSkeleton>
      <div>
        <Skeleton className="w-52 h-7" />
      </div>
    </BookingSkeleton>
  );
};

export default BookingDetailSkeleton;
