import { Eye, EyeOff } from "lucide-react";

interface ShowPasswordIconProps {
  showPassword: boolean;
  handleShowPassword: () => void;
}

const ShowPasswordIcon = ({
  handleShowPassword,
  showPassword,
}: ShowPasswordIconProps) => {
  return (
    <>
      {showPassword ? (
        <EyeOff
          size={20}
          className="absolute left-2 top-2"
          onClick={handleShowPassword}
        />
      ) : (
        <Eye
          size={20}
          className="absolute left-2 top-2"
          onClick={handleShowPassword}
        />
      )}
    </>
  );
};

export default ShowPasswordIcon;
