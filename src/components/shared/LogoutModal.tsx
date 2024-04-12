import { Button } from "@/components/ui/button";
import useLogOut from "@/hooks/useLogOut";
import { LogOut } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LogoutLoading from "./LogoutLoading";

const LogoutModal = () => {
  const { mutate: logout, isPending } = useLogOut();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="popover-item">
          <LogOut size={20} />
          خروج
        </div>
      </DialogTrigger>
      <DialogContent className="w-72 sm:w-full rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center sm:text-right text-[13px] sm:text-[16px] mt-4">
            آیا میخواهید از حساب کاربری خود خارج شوید؟
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              خیر
            </Button>
          </DialogClose>
          <Button onClick={() => logout()} disabled={isPending}>
            {isPending ? <LogoutLoading /> : "بله"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
