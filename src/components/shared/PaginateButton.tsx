import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PaginateButtonProps {
  pageSize: number;
  itemCount: number;
}

const PaginateButton = ({ pageSize, itemCount }: PaginateButtonProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 justify-end my-5">
      <p>
        صفحه {currentPage} از {pageCount}
      </p>
      <div className="flex gap-2">
        <Button disabled={currentPage === pageCount} onClick={nextPage}>
          <ChevronRight size={20} />
          صفحه بعدی
        </Button>
        <Button disabled={currentPage === 1} onClick={prevPage}>
          صفحه قبلی
          <ChevronLeft size={20} />
        </Button>
      </div>
    </div>
  );
};

export default PaginateButton;
