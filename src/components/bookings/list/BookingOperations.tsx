import StatusSelector from "./StatusSelector";
import BookingSortSelector from "./BookingSortSelector";
import SortTypeSelector from "./SortTypeSelector";

const BookingOperations = () => {
  return (
    <div className="mb-7 flex gap-3 flex-wrap justify-between">
      <div className="flex gap-3 flex-wrap">
        <StatusSelector />
        <BookingSortSelector />
      </div>
      <div>
        <SortTypeSelector />
      </div>
    </div>
  );
};

export default BookingOperations;
