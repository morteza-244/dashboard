import Skeleton from "react-loading-skeleton";
import { TableCell, TableRow } from "../ui/table";

const BookingsTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="space-y-2 lg:space-y-0">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell className=" hidden lg:table-cell">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell className="space-y-2">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <Skeleton className="h-7" />
      </TableCell>
    </TableRow>
  );
};

export default BookingsTableSkeleton;