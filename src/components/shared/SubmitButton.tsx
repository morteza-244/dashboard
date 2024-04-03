import { Button } from "@/components/ui/button";
import SubmitLoading from "./SubmitLoading";
interface SubmitButtonProps {
  cabinId?: string;
  isPending: boolean;
}

const SubmitButton = ({ cabinId, isPending }: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isPending}>
      {isPending ? (
        <SubmitLoading />
      ) : cabinId ? (
        "ویرایش اطلاعات"
      ) : (
        "ثبت اقامتگاه"
      )}
    </Button>
  );
};

export default SubmitButton;
