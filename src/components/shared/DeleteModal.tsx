import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useDeleteBooking from "@/hooks/useDeleteBooking";

interface DeleteModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  bookingId: number;
}

const DeleteModal = ({ open, onClose, bookingId }: DeleteModalProps) => {
  const { mutate } = useDeleteBooking();
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="w-72 sm:w-full rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center sm:text-right text-[13px] sm:text-[16px]">
            آیا مطمئنید که می خواهید این رزرو را حذف کنید؟
          </AlertDialogTitle>
          <AlertDialogDescription className="text-right text-[12px] sm:text-[16px]">
            اگر روی دکمه حذف کلیک کنید رزرو شما از لیست رزرو ها حذف خواهد شد.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel className="mt-0">لغو</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutate(bookingId)}>
            حذف
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
