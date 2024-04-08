import Skeleton from "react-loading-skeleton";

const BookingDetailSkeleton = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <Skeleton className="w-36 h-5" />
        <Skeleton className="w-14 h-5" />
      </div>
      <div className="booking-card">
        <div className="flex justify-between flex-col sm:flex-row flex-wrap p-5 gap-2">
          <Skeleton className="w-full! sm:w-72 h-5" />
          <Skeleton className="w-full! sm:w-96 h-5" />
        </div>
        <div className="p-5">
          <div className="flex flex-col gap-3">
            <Skeleton className="w-44 h-5" />
            <Skeleton className="w-52 h-5" />
            <Skeleton className="w-40 h-5" />
            <div className="flex gap-2 items-center">
              <Skeleton className="w-7 h-7 rounded-full" />
              <Skeleton className="w-32 h-5" />
            </div>
            <div className="flex gap-2 items-center">
              <Skeleton className="w-7 h-7 rounded-full" />
              <Skeleton className="w-52 sm:w-96 h-5" />
            </div>
            <div className="flex gap-2 items-center">
              <Skeleton className="w-7 h-7 rounded-full" />
              <Skeleton className="w-44 h-5" />
            </div>
            <div className="mx-auto">
              <Skeleton className="w-56 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDetailSkeleton;
