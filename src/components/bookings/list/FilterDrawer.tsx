import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BookingOperations from "./BookingOperations";
import { ListFilter } from "lucide-react";

const FilterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="block sm:hidden">
        <Button variant="secondary" size={"sm"} className="mb-5">
          فیلتر ها
          <ListFilter size={20} className="mr-2" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="space-y-5">
        <DrawerHeader>
          <BookingOperations />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
