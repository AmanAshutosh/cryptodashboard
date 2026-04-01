import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar,
  Download,
  TrendingUp,
  PieChart as PieIcon,
  List,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import "./Analytics.css";

const performanceData = [
  { date: "Mar 01", profit: 400 },
  { date: "Mar 05", profit: -200 },
  { date: "Mar 10", profit: 900 },
  { date: "Mar 15", profit: 1500 },
  { date: "Mar 20", profit: 1100 },
  { date: "Mar 25", profit: 1800 },
  { date: "Mar 30", profit: 2100 },
];

const coinDistribution = [
  { name: "BTC", value: 45, color: "#3b7ddd" },
  { name: "ETH", value: 30, color: "#fcb92c" },
  { name: "SOL", value: 15, color: "#4bbf73" },
  { name: "Others", value: 10, color: "#dee2e6" },
];

const Card = ({ title, children, actions }) => (
  <div className="card-wrapper">
    <div className="card-header">
      <h5
        className="m-0"
        style={{ fontSize: "1rem", fontWeight: "600", color: "#495057" }}
      >
        {title}
      </h5>
      {actions}
    </div>
    <div className="card-body">{children}</div>
  </div>
);

export default function Analytics() {
  const [selectedCoin, setSelectedCoin] = useState("All Coins");
  const currentYear = new Date().getFullYear();

  return (
    <div className="analytics-container">
      <div className="header-flex">
        <div>
          <h1
            className="m-0"
            style={{ fontSize: "1.5rem", fontWeight: "600", color: "#495057" }}
          >
            Performance Analytics
          </h1>
          <p
            className="m-0"
            style={{ color: "#6c757d", fontSize: "14px", marginTop: "5px" }}
          >
            Detailed breakdown of your trading history.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <select
            className="select-input"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            <option>All Coins</option>
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
          </select>

          <div
            className="filter-box"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              padding: "0 10px",
            }}
          >
            <Calendar size={16} color="#6c757d" />
            <input
              type="date"
              className="date-input"
              style={{ border: "none" }}
              defaultValue="2026-03-01"
            />
          </div>

          <button className="btn-export">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {[
          {
            label: "Total ROI",
            value: "+24.5%",
            icon: TrendingUp,
            color: "#4bbf73",
          },
          {
            label: "Avg. Trade",
            value: "$1,240",
            icon: List,
            color: "#3b7ddd",
          },
          { label: "Win Rate", value: "68%", icon: PieIcon, color: "#fcb92c" },
          {
            label: "Total Vol",
            value: "$452.1k",
            icon: ArrowUpRight,
            color: "#222e3c",
          },
        ].map((stat, i) => (
          <div key={i} className="stat-card">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{
                  color: "#6c757d",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {stat.label}
              </span>
              <stat.icon size={18} color={stat.color} />
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginTop: "10px",
                color: "#495057",
              }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <Card title="Profit/Loss Performance">
          <div style={{ height: "350px", width: "100%" }}>
            <ResponsiveContainer>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b7ddd" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3b7ddd" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f1f1"
                />
                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#3b7ddd"
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Asset Allocation">
          <div style={{ height: "350px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coinDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {coinDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ marginTop: "10px" }}>
              {coinDistribution.map((coin, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    padding: "5px 0",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: coin.color,
                      }}
                    />{" "}
                    {coin.name}
                  </span>
                  <span style={{ fontWeight: "700" }}>{coin.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card title="Detailed Order History">
        <div className="table-responsive">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Type</th>
                <th>Entry Price</th>
                <th>Exit Price</th>
                <th>P/L (%)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  coin: "BTC",
                  type: "LONG",
                  entry: "62,100",
                  exit: "64,300",
                  pl: "+3.54%",
                  up: true,
                  date: "2026-03-28",
                },
                {
                  coin: "ETH",
                  type: "SHORT",
                  entry: "3,550",
                  exit: "3,412",
                  pl: "+4.01%",
                  up: true,
                  date: "2026-03-27",
                },
                {
                  coin: "SOL",
                  type: "LONG",
                  entry: "152.00",
                  exit: "145.20",
                  pl: "-4.47%",
                  up: false,
                  date: "2026-03-25",
                },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: "700" }}>{row.coin}</td>
                  <td>
                    <span
                      style={{
                        color: row.type === "LONG" ? "#3b7ddd" : "#fcb92c",
                        fontWeight: "600",
                      }}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td>${row.entry}</td>
                  <td>${row.exit}</td>
                  <td
                    style={{
                      color: row.up ? "#4bbf73" : "#d9534f",
                      fontWeight: "700",
                    }}
                  >
                    {row.pl}
                  </td>
                  <td style={{ color: "#6c757d" }}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <footer
        style={{
          padding: "24px 0",
          borderTop: "1px solid #e5e9f2",
          display: "flex",
          justifyContent: "space-between",
          color: "#6c757d",
          fontSize: "14px",
        }}
      >
        <div>
          <strong></strong> &copy; {currentYear} —{" "}
          <strong>Ashutosh Aman</strong>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Made with <Heart size={14} color="#d9534f" /> in React
        </div>
      </footer>
    </div>
  );
}
