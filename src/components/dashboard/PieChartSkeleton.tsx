import Skeleton from "react-loading-skeleton";

const PieChartSkeleton = () => {
  return (
    <div className="p-4 space-y-3 sm:shadow-md shadow-md bg-slate-100 dark:bg-gray-900 rounded-lg">
      <Skeleton className="w-44 h-5" />
      <div className="flex gap-10 justify-center p-4">
        <div className="hidden sm:block">
          <Skeleton className="w-32 h-3" count={8} />
        </div>
        <Skeleton className="w-44 h-44 rounded-full sm:mr-16" />
      </div>
    </div>
  );
};

export default PieChartSkeleton;
