import BookingOperations from "./BookingOperations";
import BookingsTable from "./BookingsTable";
import FilterDrawer from "./FilterDrawer";
const Bookings = () => {
  return (
    <>
      <div className="hidden sm:block">
        <BookingOperations />
      </div>
      <FilterDrawer />
      <BookingsTable />
    </>
  );
};

export default Bookings;
