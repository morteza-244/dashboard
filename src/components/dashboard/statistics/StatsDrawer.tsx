import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useBookingStore from "@/store/bookingStore";
import { PropsWithChildren } from "react";

const StatsDrawer = ({ children }: PropsWithChildren) => {
  const lastDay = useBookingStore((s) => s.bookingQuery.lastDay);
  return (
    <Drawer>
      <DrawerTrigger asChild className="block sm:hidden">
        <Button variant="secondary">آمار ها</Button>
      </DrawerTrigger>
      <DrawerContent className="block sm:hidden">
        <DrawerHeader>
          <DrawerTitle className="text-[17px]">
            آمار های {lastDay} روز گدشته
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-center flex-wrap gap-3 p-3">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default StatsDrawer;
