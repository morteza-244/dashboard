import StatusSelector from "./StatusSelector";
import BookingSortSelector from "./BookingSortSelector";

const BookingOperations = () => {
  return (
    <div className="mb-7 flex gap-3 flex-wrap">
      <StatusSelector />
      <BookingSortSelector />
    </div>
  );
};

export default BookingOperations;
