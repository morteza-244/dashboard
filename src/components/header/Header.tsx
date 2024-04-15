import ModeToggle from "@/components/ModeToggle";
import useCurrentUser from "@/hooks/useCurrentUser";
import UserDropdownMenu from "./UserDropdownMenu";
import HamburgerMenu from "./HamburgerMenu";
const Header = () => {
  const { data } = useCurrentUser();
  const fullName = String(data?.user.user_metadata.fullName);

  return (
    <header className="sticky top-0 bg-slate-100 dark:bg-slate-950 shadow-md p-4 z-50 flex justify-between">
      <HamburgerMenu
        avatar={data?.user.user_metadata.avatar}
        fullName={fullName}
        email={data?.user.email!}
      />
      <ModeToggle />
      <UserDropdownMenu
        avatar={data?.user.user_metadata.avatar}
        fullName={fullName}
      />
    </header>
  );
};

export default Header;
