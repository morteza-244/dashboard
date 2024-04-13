import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus } from "lucide-react";
import { ChangeEvent } from "react";

interface UpdateProfileImageProps {
  file: File | null;
  avatar: string;
  isPending?: boolean;
  handleChangeAvatar: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UpdateProfileImage = ({
  avatar,
  file,
  handleChangeAvatar,
  isPending,
}: UpdateProfileImageProps) => {
  return (
    <div className="mx-auto w-28 h-28 rounded-full relative">
      <img
        src={file ? URL.createObjectURL(file) : avatar}
        alt=""
        className="w-28 h-28 rounded-full object-cover"
      />
      <div className="w-7 h-7 rounded-full bg-slate-300 absolute bottom-1 right-1">
        <Label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center h-full w-full"
        >
          <Input
            type="file"
            id="dropzone-file"
            disabled={isPending}
            onChange={handleChangeAvatar}
            className="w-full h-full hidden"
          />
          <ImagePlus size={20} className="text-slate-800" />
        </Label>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
