import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCabin } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DropdownMenuCellProps {
  cabinId: number;
}

const DropdownMenuCell = ({ cabinId }: DropdownMenuCellProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast("Cabin successfully deleted");
    },
    onError: (error) => {
      toast(error.message);
    },
  });
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
