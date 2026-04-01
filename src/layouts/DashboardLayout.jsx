import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./DashboardLayout.css"; // CSS Import

export default function DashboardLayout() {
  return (
    <div className="layout-wrapper">
      
      <Sidebar />

      <main className="main-content">
        <header className="top-header">
          <div className="brand-text">
            Sheryians <span className="brand-accent">eXCHANGE</span>
            <span className="brand-divider">| Trading Terminal</span>
          </div>
        </header>

       
        <div className="content-outlet">
          <Outlet />
        </div>

        
        <Footer />
      </main>
    </div>
  );
}
