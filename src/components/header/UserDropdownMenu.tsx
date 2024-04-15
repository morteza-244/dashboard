import LogoutModal from "@/components/shared/LogoutModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface UserDropdownMenuProps {
  fullName: string;
  avatar: string;
}

const UserDropdownMenu = ({ fullName, avatar }: UserDropdownMenuProps) => {
  const navigate = useNavigate();

  return (
    <Popover>
      <PopoverTrigger asChild className="hidden sm:block">
        <Avatar className="cursor-pointer">
          <AvatarImage src={avatar} alt={`user-avatar ${fullName}`} />
          <AvatarFallback>{fullName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1 space-y-1 ml-4">
        <div className="popover-item" onClick={() => navigate("/account")}>
          <UserRound size={20} />
          پروفایل
        </div>
        <LogoutModal />
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdownMenu;
