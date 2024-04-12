import { ThemeProvider } from "@/components/ThemeProvider";
import { SkeletonTheme } from "@/components/shared";
import { MainLayout } from "@/layouts";
import {
  AccountPage,
  BookingDetailPage,
  BookingsPage,
  CabinsPage,
  CheckInPage,
  CreateCabinsPage,
  DashboardPage,
  EditCabinPage,
  LoginPage,
  PageNotFound,
  SettingsPage,
  UsersPage,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/AuthProvider";

const App = () => {
  return (
    <SkeletonTheme>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/:id" element={<BookingDetailPage />} />
              <Route path="/checkIn/:id" element={<CheckInPage />} />
              <Route path="/cabins" element={<CabinsPage />} />
              <Route path="/cabins/new" element={<CreateCabinsPage />} />
              <Route path="/cabins/edit/:id" element={<EditCabinPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/auth/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SkeletonTheme>
  );
};

export default App;
