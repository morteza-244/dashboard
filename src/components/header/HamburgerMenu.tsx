import SideBarLinksContainer from "@/components/sideBar/SideBarLinksContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import LogoutModal from "../shared/LogoutModal";

interface HamburgerMenuProps {
  avatar: string;
  fullName: string;
  email: string;
}

const HamburgerMenu = ({ avatar, fullName, email }: HamburgerMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-4">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage src={avatar} alt={`user-avatar ${fullName}`} />
                <AvatarFallback>{fullName}</AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="text-[12px]">{fullName}</p>
                <p className="text-[11px] font-thin">{email}</p>
              </div>
            </div>
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col justify-between h-96">
            <SideBarLinksContainer />
            <LogoutModal />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
