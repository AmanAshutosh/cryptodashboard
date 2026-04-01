import React, { useState } from "react";
import "./Wallets.css";
import {
  Wallet,
  PlusCircle,
  Send,
  ArrowRightLeft,
  Eye,
  EyeOff,
  TrendingUp,
} from "lucide-react";

const walletSummary = {
  totalBalance: "12,450.85",
  totalPNL: "+1,240.30",
  pnlPercentage: "+11.2%",
  spot: "5,230.40",
  earn: "3,120.15",
  funding: "1,450.30",
  futures: "2,650.00",
};

const spotAssets = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    balance: "0.045",
    value: "2,880.50",
    change: "+2.4%",
  },
  {
    coin: "Ethereum",
    symbol: "ETH",
    balance: "0.85",
    value: "1,950.20",
    change: "-1.1%",
  },
  {
    coin: "Solana",
    symbol: "SOL",
    balance: "15.00",
    value: "399.70",
    change: "+5.6%",
  },
];

const BalanceCard = ({ title, amount, color = "#3b7ddd" }) => (
  <div
    className="balance-sub-card"
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 0.875rem 0 rgba(33,37,41,.05)",
      borderLeft: `4px solid ${color}`,
    }}
  >
    <div
      style={{
        fontSize: "11px",
        color: "#adb5bd",
        fontWeight: "700",
        textTransform: "uppercase",
        marginBottom: "10px",
      }}
    >
      {title}
    </div>
    <div style={{ fontSize: "1.25rem", fontWeight: "800", color: "#495057" }}>
      ${amount}
    </div>
  </div>
);

export default function Wallets() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className="wallet-container">
      <div style={{ marginBottom: "24px" }}>
        <h1 className="wallet-title">Wallet Overview</h1>
        <p className="wallet-subtitle">
          Manage your assets and track portfolio performance.
        </p>
      </div>

      
      <div className="main-balance-card">
        <div className="balance-content">
          <div className="wallet-bg-icon">
            <Wallet size={100} />
          </div>

          <div className="balance-label">
            Total Estimated Balance
            <span
              onClick={() => setHideBalance(!hideBalance)}
              style={{ cursor: "pointer" }}
            >
              {hideBalance ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>

          <div className="balance-amount-row">
            <h2 className="balance-main">
              {hideBalance ? "••••••" : `$${walletSummary.totalBalance}`}
            </h2>
            <span className="currency-tag">USD</span>
          </div>

          <div style={{ marginTop: "15px", fontSize: "14px" }}>
            <span style={{ color: "#adb5bd" }}>Today's PNL: </span>
            <span style={{ color: "#4bbf73", fontWeight: "600" }}>
              {walletSummary.totalPNL} ({walletSummary.pnlPercentage})
            </span>
          </div>
        </div>

        <div className="quick-actions-bar">
          <button className="btn-action btn-blue">
            <PlusCircle size={16} /> Add Funds
          </button>
          <button className="btn-action btn-gray">
            <Send size={16} /> Send
          </button>
          <button className="btn-action btn-outline">
            <ArrowRightLeft size={16} /> Transfer
          </button>
        </div>
      </div>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "30px",
        }}
      >
        <BalanceCard
          title="Spot Wallet"
          amount={walletSummary.spot}
          color="#3b7ddd"
        />
        <BalanceCard
          title="Earn Account"
          amount={walletSummary.earn}
          color="#fcb92c"
        />
        <BalanceCard
          title="Funding Wallet"
          amount={walletSummary.funding}
          color="#20c997"
        />
        <BalanceCard
          title="Futures Margin"
          amount={walletSummary.futures}
          color="#d9534f"
        />
      </div>

     
      <div className="asset-section">
        <div className="asset-header">
          <h5 style={{ margin: 0, fontWeight: "600", color: "#495057" }}>
            Asset List
          </h5>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#3b7ddd",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View History
          </button>
        </div>
        <table className="asset-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Amount</th>
              <th>Value (USD)</th>
              <th>24h Change</th>
              <th style={{ textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {spotAssets.map((asset, i) => (
              <tr key={i}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div className="coin-icon">{asset.symbol}</div>
                    <div>
                      <div style={{ fontWeight: "700", color: "#495057" }}>
                        {asset.coin}
                      </div>
                      <div style={{ fontSize: "12px", color: "#adb5bd" }}>
                        {asset.symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{asset.balance}</td>
                <td style={{ fontWeight: "600" }}>${asset.value}</td>
                <td
                  style={{
                    color: asset.change.startsWith("+") ? "#4bbf73" : "#d9534f",
                    fontWeight: "700",
                  }}
                >
                  {asset.change}
                </td>
                <td style={{ textAlign: "right" }}>
                  <button
                    style={{
                      color: "#3b7ddd",
                      border: "none",
                      background: "none",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
