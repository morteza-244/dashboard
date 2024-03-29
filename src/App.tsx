import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts";
import {
  AccountPage,
  BookingsPage,
  CabinsPage,
  DashboardPage,
  LoginPage,
  SettingsPage,
  UsersPage,
} from "@/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/cabins" element={<CabinsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
