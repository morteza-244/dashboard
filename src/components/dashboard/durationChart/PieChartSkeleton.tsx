import Skeleton from "react-loading-skeleton";

const PieChartSkeleton = () => {
  return (
    <div className="flex items-center px-5 py-[9px] justify-center sm:justify-between">
      <div className="hidden sm:block">
        <Skeleton className="w-12 h-3" />
        <Skeleton className="w-12 h-3" />
        <Skeleton className="w-12 h-3" />
        <Skeleton className="w-14 h-3" />
        <Skeleton className="w-14 h-3" />
        <Skeleton className="w-16 h-3" />
        <Skeleton className="w-20 h-3" />
        <Skeleton className="w-16 h-3" />
      </div>
      <Skeleton className="w-40 h-40 rounded-full" />
    </div>
  );
};

export default PieChartSkeleton;
