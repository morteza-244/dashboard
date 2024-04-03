import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useDeleteCabin from "@/hooks/useDeleteCabin";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DropdownMenuCellProps {
  cabinId: number;
}

const DropdownMenuCell = ({ cabinId }: DropdownMenuCellProps) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteCabin();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          className="justify-between"
          onClick={() => navigate(`/cabins/edit/${cabinId}`)}
        >
          <Pencil size={20} />
          ویرایش
        </DropdownMenuItem>
        <DropdownMenuItem
          className="justify-between"
          onClick={() => mutate(cabinId)}
        >
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
