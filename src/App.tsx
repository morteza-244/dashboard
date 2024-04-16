import { SkeletonTheme } from "@/components/shared";
import { ThemeProvider } from "@/components/ThemeProvider";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import QueryClientProvider from "./QueryClientProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider>
        <SkeletonTheme>
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
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </SkeletonTheme>
        <Toaster position="top-center" duration={1000} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
