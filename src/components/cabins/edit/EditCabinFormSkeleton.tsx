import Skeleton from "react-loading-skeleton";

const EditCabinFormSkeleton = () => {
  return (
    <div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
            <Skeleton className="h-10" />
          </div>
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
            <Skeleton className="h-10" />
          </div>
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
            <Skeleton className="h-10" />
          </div>
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
            <Skeleton className="h-10" />
          </div>
        </div>
        <div>
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
        <div>
          <div>
            <Skeleton className="h-5 w-16 mb-3" />
          </div>
          <Skeleton className="h-52" />
        </div>
        <Skeleton className="h-10 w-28 mt-8 mb-2" />
      </div>
    </div>
  );
};

export default EditCabinFormSkeleton;
