import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";

const CabinsTable = () => {
  const { data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="custom-table-cell"></TableHead>
          <TableHead>کابین</TableHead>
          <TableHead>ظرفیت</TableHead>
          <TableHead className="custom-table-cell">قیمت</TableHead>
          <TableHead className="custom-table-cell">تخفیف</TableHead>
          <TableHead className="text-left"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cabins?.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CabinsTable;
