import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts";
import {
  AccountPage,
  BookingsPage,
  CabinsPage,
  CreateCabinsPage,
  DashboardPage,
  EditCabinPage,
  LoginPage,
  PageNotFound,
  SettingsPage,
  UsersPage,
} from "@/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/cabins" element={<CabinsPage />} />
          <Route path="/cabins/new" element={<CreateCabinsPage />} />
          <Route path="/cabins/edit/:id" element={<EditCabinPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
