import { TTodayBooking } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";
import AutoPlay from "embla-carousel-autoplay";

const TodayActivityCarousel = ({ data }: { data: TTodayBooking[] }) => {
  return (
    <Carousel
      plugins={[
        AutoPlay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "center",
        dragFree: true,
        direction: "rtl",
      }}
      className="w-full p-4 relative space-y-3 sm:shadow-md shadow-md bg-slate-100 dark:bg-gray-900 rounded-lg"
    >
      <h4 className="text-center sm:text-right">رزرو های جدید</h4>
      <CarouselContent className="gap-5 py-2 mb-5">
        {data?.map((item) => (
          <CarouselCard key={item.id} booking={item} />
        ))}
      </CarouselContent>
      <div className="absolute bottom-5 text-center left-0">
        <CarouselNext className="" />
        <CarouselPrevious className="-right-[90px]" />
      </div>
    </Carousel>
  );
};

export default TodayActivityCarousel;
