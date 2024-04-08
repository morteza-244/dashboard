import Skeleton from "react-loading-skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

const BookingsTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="space-y-2 lg:space-y-0">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell className="space-y-2">
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-7" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-7" />
      </TableCell>
    </TableRow>
  );
};

export default BookingsTableSkeleton;
