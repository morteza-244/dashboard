import Skeleton from "react-loading-skeleton";

const StatisticsSkeleton = () => {
  return (
    <>
      <div className="bg-white dark:bg-muted shadow-lg rounded-lg p-2 w-52 h-20 hover:scale-110 transition-transform flex items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 sm:w-12 h-9 sm:h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-muted shadow-lg rounded-lg p-2 w-52 h-20 hover:scale-110 transition-transform flex items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 sm:w-12 h-9 sm:h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-muted shadow-lg rounded-lg p-2 w-52 h-20 hover:scale-110 transition-transform flex items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 sm:w-12 h-9 sm:h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-muted shadow-lg rounded-lg p-2 w-52 h-20 hover:scale-110 transition-transform flex items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 sm:w-12 h-9 sm:h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSkeleton;
