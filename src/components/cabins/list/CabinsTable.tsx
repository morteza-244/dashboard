import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetCabins from "@/hooks/useGetCabins";
import { useNavigate } from "react-router-dom";
import CabinRow from "./CabinRow";
import CabinsTableSkeleton from "./CabinsTableSkeleton";

const CabinsTable = () => {
  const { data: cabins, isLoading } = useGetCabins();
  const skeletons = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/cabins/new")} variant="secondary" className="mb-4">
        افزودن اقامتگاه
      </Button>
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
          {isLoading &&
            skeletons.map((skeleton) => <CabinsTableSkeleton key={skeleton} />)}
          {cabins?.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CabinsTable;
