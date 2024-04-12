import ModeToggle from "@/components/ModeToggle";
import LogoutModal from "@/components/shared/LogoutModal";
const Header = () => {

  return (
    <header className="sticky top-0 bg-white dark:bg-slate-950 shadow-md p-4 z-50 flex justify-between">
      <ModeToggle />
      <LogoutModal />
    </header>
  );
};

export default Header;
