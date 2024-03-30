import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import QueryClientProvider from "./QueryClientProvider.tsx";
import { Toaster } from "@/components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
      <Toaster position="top-center" />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
