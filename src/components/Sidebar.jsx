import React from "react";
import { NavLink } from "react-router-dom";
import {
  Layout,
  PieChart,
  User,
  FileText,
  CheckSquare,
  Calendar,
  Wallet,
  LogOut,
  ChevronRight,
  Activity,
} from "lucide-react";
import "./Sidebar.css"; 

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink to={to} className="sidebar-link">
    <Icon size={18} />
    <span className="sidebar-link-text">{label}</span>
    <ChevronRight size={12} className="chevron" style={{ opacity: 0.4 }} />
  </NavLink>
);

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* BRANDING */}
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Activity size={20} />
        </div>
        <div className="brand-name">
          SHERYIANS <span>eXCHANGE</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="sidebar-content">
        <div className="sidebar-category">Main</div>
        <SidebarItem to="/crypto" icon={Layout} label="Dashboard" />
        <SidebarItem to="/analytics" icon={PieChart} label="Analytics" />

        <div className="sidebar-category">Trading Desk</div>
        <SidebarItem to="/profile" icon={User} label="Profile" />
        <SidebarItem to="/invoice" icon={FileText} label="Invoices" />
        <SidebarItem to="/tasks" icon={CheckSquare} label="Tasks" />
        <SidebarItem to="/calendar" icon={Calendar} label="Calendar" />
        <SidebarItem to="/wallets" icon={Wallet} label="Wallets" />
      </div>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <span className="user-email">ashutoshaman@duck.com</span>
        <LogOut size={16} className="logout-btn" />
      </div>
    </div>
  );
}
