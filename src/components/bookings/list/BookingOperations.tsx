import StatusSelector from "./StatusSelector";
import BookingSortSelector from "./BookingSortSelector";
import SortTypeSelector from "./SortTypeSelector";

const BookingOperations = () => {
  return (
    <div className="flex mb-7 gap-5 sm:gap-3 flex-wrap justify-between">
      <div className="flex gap-5 sm:gap-3 flex-wrap">
        <StatusSelector />
        <BookingSortSelector />
      </div>
      <SortTypeSelector />
    </div>
  );
};

export default BookingOperations;
