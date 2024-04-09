import BookingDetailCard from "@/components/bookings/detail/BookingDetailCard";
import useGetBooking from "@/hooks/useGetBooking";
import CheckInFooter from "./CheckInFooter";

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
        "loading..."
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
