import logo from "@/assets/logo.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <div className="form-container">
        <div className="flex flex-col gap-2 items-center">
          <img src={logo} alt="logo" className="w-16 h-12" />
          <h3 className="text-xl font-bold">اقامتگاه پارسیان</h3>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
