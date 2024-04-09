import useGetBooking from "@/hooks/useGetBooking";
import BookingDetailCard from "./BookingDetailCard";
import BookingDetailSkeleton from "./BookingDetailSkeleton";
import { EmptyResource } from "@/components/shared";
import CheckInButton from "./CheckInButton";
import { TStatus } from "@/types";

const BookingDetail = () => {
  const { data: booking, isLoading, error } = useGetBooking();
  const cabinName = booking?.cabins?.name!;
  const fullName = booking?.guests?.fullName!;
  const email = booking?.guests?.email!;

  if (error) return <EmptyResource resourceName="رزرو مورد نظر" />;

  return (
    <section className="space-y-8">
      {isLoading ? (
        <BookingDetailSkeleton />
      ) : (
        <>
          <BookingDetailCard
            booking={booking!}
            cabinName={cabinName}
            guests={{
              email,
              fullName,
            }}
          />
          <CheckInButton
            bookingId={booking?.id!}
            bookingStatus={booking?.status as TStatus}
          />
        </>
      )}
    </section>
  );
};

export default BookingDetail;
