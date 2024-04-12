import { Header } from "@/components/header";
import { SideBar } from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden container p-0 mx-auto">
      <SideBar />
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto dark:bg-inherit">
        {/* Sticky Header */}
        <Header />
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
