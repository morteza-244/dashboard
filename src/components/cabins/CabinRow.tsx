import { TCabin } from "@/types";
import { TableCell, TableRow } from "@/components/ui/table";
import DropdownMenuCell from "./DropdownMenuCell";
interface CabinRowProps {
  cabin: TCabin;
}

const CabinRow = ({ cabin }: CabinRowProps) => {
  return (
    <TableRow className="whitespace-nowrap">
      <TableCell className="custom-table-cell">
        <img
          src={cabin.image!}
          alt="cabin-image"
          className="min-w-16 max-w-16 object-cover h-10 rounded-md"
        />
      </TableCell>
      <TableCell>{cabin.name}</TableCell>
      <TableCell>{cabin.maxCapacity + " "} نفر</TableCell>
      <TableCell className="custom-table-cell">
        {cabin.regularPrice + " "}تومان
      </TableCell>
      <TableCell className="custom-table-cell">
        {cabin.discount + " "}تومان
      </TableCell>
      <TableCell className="text-left">
        <DropdownMenuCell />
      </TableCell>
    </TableRow>
  );
};

export default CabinRow;
