import Skeleton from "react-loading-skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

const BookingsTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="w-28 sm:w-32 lg:w-28">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="w-60 sm:w-72 lg:w-44">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="large-cell lg:w-96">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="smallTable-cell sm:w-28">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="large-cell lg:w-28">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="text-left">
        <Skeleton className="h-5 w-10" />
      </TableCell>
    </TableRow>
  );
};

export default BookingsTableSkeleton;
