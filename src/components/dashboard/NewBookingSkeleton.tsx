import Skeleton from "react-loading-skeleton";
import { CarouselItem } from "@/components/ui/carousel";

const NewBookingSkeleton = () => {
  return (
    <CarouselItem className="rounded-lg h-44 bg-slate-50 dark:bg-gray-800 shadow-md basis-5/6 sm:basis-3/6 md:basis-3/6 lg:basis-4/6 p-4 space-y-2">
      <Skeleton className="h-3 w-40" />
      <Skeleton className="h-3 w-36" />
      <Skeleton className="h-3 w-36" />
      <Skeleton className="h-3 w-32" />
      <div className="flex gap-3 justify-end">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </CarouselItem>
  );
};

export default NewBookingSkeleton;
