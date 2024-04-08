import useGetBooking from "@/hooks/useGetBooking";
import BookingDetailCard from "./BookingDetailCard";
import BookingDetailSkeleton from "./BookingDetailSkeleton";

const BookingDetail = () => {
  const { data: booking, isLoading } = useGetBooking();
  const cabinName = booking?.cabins?.name!;
  const fullName = booking?.guests?.fullName!;
  const email = booking?.guests?.email!;

  return (
    <>
      {isLoading ? (
        <BookingDetailSkeleton />
      ) : (
        <BookingDetailCard
          booking={booking!}
          cabinName={cabinName}
          guests={{
            email,
            fullName,
          }}
        />
      )}
    </>
  );
};

export default BookingDetail;
