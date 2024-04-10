import BookingDetailCard from "@/components/bookings/detail/BookingDetailCard";
import useGetBooking from "@/hooks/useGetBooking";
import CheckInFooter from "./CheckInFooter";
import CheckInSkeleton from "./CheckInSkeleton";

const CheckIn = () => {
  const { data: booking, isLoading } = useGetBooking();
  const cabinName = booking?.cabins?.name!;
  const guests = {
    fullName: booking?.guests?.fullName!,
    email: booking?.guests?.email!,
  };

  return (
    <div className="space-y-8">
      {isLoading ? (
        <CheckInSkeleton />
      ) : (
        <>
          <BookingDetailCard
            booking={booking!}
            cabinName={cabinName}
            guests={guests}
          />
          <CheckInFooter fullName={guests.fullName} booking={booking!} />
        </>
      )}
    </div>
  );
};

export default CheckIn;
