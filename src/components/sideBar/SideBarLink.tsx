import { SideLinks } from "@/types";
import { NavLink } from "react-router-dom";
interface SideBarLinkProps {
  currentRoute: boolean;
  link: SideLinks;
}

const SideBarLink = ({ link, currentRoute }: SideBarLinkProps) => {
  return (
    <li>
      <NavLink
        to={link.route}
        className={`flex items-center gap-3 p-1 md:p-3 rounded-md ${
          currentRoute ? "bg-indigo-600 text-slate-100" : "bg-none"
        }`}
      >
        {link.icon}
        <span className="text-sm md:text-lg">{link.label}</span>
      </NavLink>
    </li>
  );
};

export default SideBarLink;
