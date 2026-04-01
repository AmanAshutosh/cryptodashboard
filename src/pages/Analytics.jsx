import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, Download } from "lucide-react";
import "./Analytics.css";

const performanceData = [
  { date: "Mar 01", profit: 400 },
  { date: "Mar 05", profit: 700 },
  { date: "Mar 10", profit: 900 },
  { date: "Mar 15", profit: 850 },
  { date: "Mar 20", profit: 1100 },
  { date: "Mar 25", profit: 1600 },
  { date: "Mar 30", profit: 2100 },
];

const coinDistribution = [
  { name: "Bitcoin (BTC)", value: 40, color: "#3b7ddd" },
  { name: "Ethereum (ETH)", value: 25, color: "#fcb92c" },
  { name: "Solana (SOL)", value: 15, color: "#4bbf73" },
  { name: "Cardano (ADA)", value: 8, color: "#d9534f" },
  { name: "Polkadot (DOT)", value: 7, color: "#222e3c" },
  { name: "Polygon (MATIC)", value: 5, color: "#20c997" },
];

const Card = ({ title, children }) => (
  <div className="card-wrapper">
    <div className="card-header">
      <h5
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          margin: 0,
          color: "#495057",
        }}
      >
        {title}
      </h5>
    </div>
    <div className="card-body">{children}</div>
  </div>
);

export default function Analytics() {
  const [date, setDate] = useState("2026-03-01");
  const [selectedCoin, setSelectedCoin] = useState("All Assets");

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#495057",
              margin: 0,
            }}
          >
            Portfolio Analytics
          </h1>
          <p style={{ color: "#6c757d", margin: "5px 0 0", fontSize: "14px" }}>
            Insights and historical performance across your assets.
          </p>
        </div>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <div className="filter-group">
            <label className="filter-label">Select Date</label>
            <div className="filter-box">
              <Calendar
                size={14}
                color="#3b7ddd"
                style={{ marginRight: "8px" }}
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "13px",
                  color: "#495057",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Asset Filter</label>
            <select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              style={{
                padding: "7px 12px",
                borderRadius: "4px",
                border: "1px solid #dee2e6",
                outline: "none",
                fontSize: "13px",
                color: "#495057",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              <option>All Assets</option>
              {coinDistribution.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <button className="btn-export">
            <Download size={14} /> Export Report
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        <Card title="Profit / Loss over Time">
          <div style={{ height: "350px", width: "100%" }}>
            <ResponsiveContainer>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b7ddd" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3b7ddd" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f1f1"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#888", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#888", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#3b7ddd"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Asset Allocation Breakdown">
          <div style={{ height: "280px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coinDistribution}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {coinDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="legend-grid">
            {coinDistribution.map((coin, i) => (
              <div key={i} className="legend-item">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#6c757d",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: coin.color,
                    }}
                  />
                  {coin.name.split(" ")[0]}
                </span>
                <span style={{ fontWeight: "700", color: "#495057" }}>
                  {coin.value}%
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
