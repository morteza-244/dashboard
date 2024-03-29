import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden container p-0 mx-auto">
      <aside className="bg-[#EDF1F5] dark-mode hidden md:w-[250px] md:block h-screen p-4 text-[#3A4C70] dark:text-slate-200">
        aside panel
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark-mode dark:border-l-2">
        {/* Sticky Header */}
        <header className="sticky top-0 bg-white dark:bg-slate-950 shadow-md p-4 z-50">
          header
        </header>
        {/* Main Content Body */}
        <div className="container mx-auto p-4">
          <Outlet />
          {/* Your main content goes here */}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
