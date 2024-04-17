import { Button } from "@/components/ui/button";
import { PAGE_SIZE } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PaginateButtonProps {
  itemCount: number;
  hasMore: Number;
  isPlaceholderData: boolean;
}

const PaginateButton = ({
  itemCount,
  hasMore,
  isPlaceholderData,
}: PaginateButtonProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(itemCount / PAGE_SIZE);
  if (pageCount <= 1) return null;

  const nextPage = () => {
    if (!isPlaceholderData && hasMore) {
      const next = currentPage + 1;
      searchParams.set("page", String(next));
      setSearchParams(searchParams);
    }
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 justify-end my-5">
      <p className="text-sm mt-1">
        صفحه {currentPage} از {pageCount || 0}
      </p>
      <div className="flex gap-2">
        <Button
          className="small-btn"
          disabled={isPlaceholderData || currentPage === pageCount}
          onClick={nextPage}
        >
          <ChevronRight size={20} />
          صفحه بعدی
        </Button>
        <Button
          className="small-btn"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          صفحه قبلی
          <ChevronLeft size={20} />
        </Button>
      </div>
    </div>
  );
};

export default PaginateButton;
