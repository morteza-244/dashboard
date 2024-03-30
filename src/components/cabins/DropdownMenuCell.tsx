import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";

const DropdownMenuCell = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem className="justify-between">
          <Pencil size={20} />
          ویرایش
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-between">
          <Trash2 size={20} />
          حذف
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-between">
          <Eye size={20} />
          مشاهده
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCell;
