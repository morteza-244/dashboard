import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginateButtonProps {
  currentPage: number;
  pageSize: number;
  itemCount: number;
}

const PaginateButton = ({
  currentPage,
  pageSize,
  itemCount,
}: PaginateButtonProps) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 justify-end my-5">
      <p>
        صفحه {currentPage} از {pageCount}
      </p>
      <div className="flex gap-2">
        <Button disabled={currentPage === pageCount}>
          <ChevronsRight size={20} />
        </Button>
        <Button disabled={currentPage === pageCount}>
          <ChevronRight size={20} />
        </Button>
        <Button disabled={currentPage === 1}>
          <ChevronLeft size={20} />
        </Button>
        <Button disabled={currentPage === 1}>
          <ChevronsLeft size={20} />
        </Button>
      </div>
    </div>
  );
};

export default PaginateButton;
