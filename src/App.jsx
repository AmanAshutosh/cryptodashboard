import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useLocation,
} from "react-router-dom";


import DashboardLayout from "./layouts/DashboardLayout";


import CryptoDashboard from "./pages/CryptoDashboard";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Invoices from "./pages/Invoices";
import Tasks from "./pages/Tasks";
import Wallets from "./pages/Wallets";
import LoadingScreen from "./components/LoadingScreen"; // Loader Import Karo


const RouteWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Jab bhi URL (pathname) badlega, loader trigger hoga
  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      {children}
    </>
  );
};

const CalendarPage = () => (
  <div style={{ padding: "20px" }}>
    <h2>Calendar</h2>
    <p>Events and schedules.</p>
  </div>
);

// Router Config: DashboardLayout ko RouteWrapper mein wrap kiya
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteWrapper>
        <DashboardLayout />
      </RouteWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="/crypto" replace /> },
      { path: "crypto", element: <CryptoDashboard /> },
      { path: "analytics", element: <Analytics /> },
      { path: "profile", element: <Profile /> },
      { path: "invoice", element: <Invoices /> },
      { path: "tasks", element: <Tasks /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "wallets", element: <Wallets /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        body { margin: 0; font-family: 'Nunito', sans-serif; background: #f4f6f9; color: #495057; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 3px; }
      `}</style>
      <RouterProvider router={router} />
    </>
  );
}
