import { BookingSkeleton } from "@/components/shared";
import Skeleton from "react-loading-skeleton";

const CheckInSkeleton = () => {
  return (
    <BookingSkeleton>
      <div className="flex flex-col gap-5">
        <Skeleton className="w-full sm:w-80 h-5" />
        <Skeleton className="w-full sm:w-80 h-5" />
        <Skeleton className="w-32 h-8" />
      </div>
    </BookingSkeleton>
  );
};

export default CheckInSkeleton;
