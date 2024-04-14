import { SubmitLoading } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface UserFormFooterProps {
  isPending: boolean;
  resetField: () => void;
}

const UserFormFooter = ({ isPending, resetField }: UserFormFooterProps) => {
  const { pathname } = useLocation();
  const buttonLabel =
    pathname === "/account" ? "بروزرسانی اطلاعات" : "ایجاد کاربر";
    
  return (
    <div className="flex gap-2">
      <Button type="submit" disabled={isPending}>
        {isPending ? <SubmitLoading /> : buttonLabel}
      </Button>
      <Button type="reset" disabled={isPending} onClick={resetField}>
        لغو
      </Button>
    </div>
  );
};

export default UserFormFooter;
