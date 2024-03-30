import { TableRow, TableCell } from "@/components/ui/table";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CabinsTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="custom-table-cell ">
        <Skeleton className="rounded-md h-10 w-16" />
      </TableCell>
      <TableCell >
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell >
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="custom-table-cell">
        <Skeleton className="h-5" />
      </TableCell>
      <TableCell className="custom-table-cell">
        <Skeleton className="h-5 " />
      </TableCell>
      <TableCell className="text-left">
        <Skeleton className="w-10 h-5" />
      </TableCell>
    </TableRow>
    
  );
};

export default CabinsTableSkeleton;
