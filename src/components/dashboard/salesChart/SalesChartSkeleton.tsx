import Skeleton from "react-loading-skeleton";

const SalesChartSkeleton = () => {
  return (
    <div className="bg-slate-100 dark:bg-gray-900 rounded-lg p-2 sm:p-4">
      <Skeleton className="w-full rounded-lg" height={300} />
    </div>
  );
};

export default SalesChartSkeleton;
