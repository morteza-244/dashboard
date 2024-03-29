import SideBarLinksContainer from "./SideBarLinksContainer";

const SideBar = () => {
  return (
    <aside className="bg-[#EDF1F5] dark-mode hidden md:w-[250px] md:block h-screen p-4 text-[#3A4C70] dark:text-slate-200">
      <div className="flex flex-col items-center justify-center">
        <img src={"./logo.png"} alt="" className="w-16 h-12" />
        <h2 className="font-bold text-xl">آکادمی مهر</h2>
      </div>
      <SideBarLinksContainer />
    </aside>
  );
};

export default SideBar;
