import SideBarLinksContainer from "./SideBarLinksContainer";
import logo from "@/assets/logo.png";
const SideBar = () => {
  return (
    <aside className="bg-[#EDF1F5] dark:bg-inherit dark:border-l-2 dark:border-gray-900 hidden md:w-[250px] md:block h-screen p-4 text-[#3A4C70] dark:text-slate-200">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="w-16 h-12" />
        <h2 className="font-bold text-xl">املاک پارسیان</h2>
      </div>
      <SideBarLinksContainer />
    </aside>
  );
};

export default SideBar;
