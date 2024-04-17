import { SideLinks } from "@/types";
import { Home, Hotel, NotebookText, Settings, Users } from "lucide-react";
import { useLocation } from "react-router-dom";
import SideBarLink from "./SideBarLink";
export const SideBarLinksContainer = () => {
  const { pathname } = useLocation();
  const links: SideLinks[] = [
    { route: "/", label: "خانه", icon: <Home size={25} /> },
    { route: "/bookings", label: "رزرو ها", icon: <NotebookText size={25} /> },
    { route: "/cabins", label: "اقامتگاه ها", icon: <Hotel size={25} /> },
    { route: "/users", label: "کاربران", icon: <Users size={25} /> },
    { route: "/settings", label: "تنظیمات", icon: <Settings size={25} /> },
  ];
  return (
    <ul className="space-y-4 md:mt-10">
      {links.map((link, index) => (
        <SideBarLink
          key={index}
          link={link}
          currentRoute={link.route === pathname}
        />
      ))}
    </ul>
  );
};

export default SideBarLinksContainer;
