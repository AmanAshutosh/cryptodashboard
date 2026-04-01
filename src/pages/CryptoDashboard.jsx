import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook import kiya
import TradingViewWidget from "../components/TradingViewWidget";
import "./CryptoDashboard.css";
import {
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Bitcoin,
  Wallet,
  TrendingUp,
  Activity,
  Heart,
} from "lucide-react";


const Card = ({ title, children, heightClass }) => (
  <div className={`dashboard-card ${heightClass || ""}`}>
    {title && (
      <div className="card-header">
        <h5>{title}</h5>
        <MoreHorizontal size={16} className="text-muted cursor-pointer" />
      </div>
    )}
    <div className="card-body">{children}</div>
  </div>
);


const CoinStat = ({ name, price, change, isUp, icon: Icon, color }) => (
  <div className="dashboard-card stat-item-flex">
    <div className="card-body">
      <div className="flex-between" style={{ marginBottom: "15px" }}>
        <div className="text-secondary text-small text-semi-bold">{name}</div>
        <div
          style={{
            background: `${color}15`,
            color: color,
            padding: "6px",
            borderRadius: "6px",
          }}
        >
          <Icon size={18} />
        </div>
      </div>
      <div className="text-dark stat-value-text" style={{ fontSize: "1.5rem" }}>
        {price}
      </div>
      <div
        className="flex-items-center text-small"
        style={{ display: "flex", gap: "5px", marginTop: "5px" }}
      >
        <span
          className={`${isUp ? "text-success" : "text-danger"} text-bold flex-items-center`}
          style={{ display: "flex" }}
        >
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{" "}
          {change}
        </span>
        <span className="text-muted">24h</span>
      </div>
    </div>
  </div>
);

export default function CryptoDashboard() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate(); 
  return (
    <div className="dashboard-root">
     
      <div className="stats-grid">
        
        <div
          className="wallet-card dashboard-card clickable-balance"
          onClick={() => navigate("/wallets")} 
          style={{ cursor: "pointer" }} 
        >
          <div className="wallet-label">
            <Wallet size={16} /> Total Balance
          </div>
          <div className="wallet-balance">$128,430.50</div>
          <div className="wallet-sub">≈ 1.9832 BTC</div>
          <div
            style={{
              fontSize: "11px",
              marginTop: "10px",
              color: "rgba(255,255,255,0.6)",
              fontWeight: "700",
            }}
          >
            VIEW WALLET DETAILS →
          </div>
        </div>

        <CoinStat
          name="Bitcoin"
          price="$64,312.00"
          change="+3.5%"
          isUp={true}
          icon={Bitcoin}
          color="#3b7ddd"
        />
        <CoinStat
          name="Ethereum"
          price="$3,412.50"
          change="-1.2%"
          isUp={false}
          icon={TrendingUp}
          color="#fcb92c"
        />
        <CoinStat
          name="Solana"
          price="$145.20"
          change="+5.7%"
          isUp={true}
          icon={Activity}
          color="#4bbf73"
        />
      </div>


      <Card title="Market Strategy (BTC/USD)">
        <TradingViewWidget />
      </Card>

      
      <div className="main-exchange-grid">
       
        <Card title="Order Book">
          <div className="text-small">
            <div
              className="flex-between text-muted"
              style={{ paddingBottom: "10px" }}
            >
              <span>Price</span>
              <span>Sum (BTC)</span>
            </div>

            <div className="text-danger">
              {[0.038999, 0.038991, 0.038979].map((p, i) => (
                <div key={i} className="order-row">
                  <span>{p}</span>
                  <span className="text-dark">{(1.2 + i).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="price-divider">
              0.03892251{" "}
              <span
                className="text-muted text-small"
                style={{ fontWeight: 400 }}
              >
                $64,231
              </span>
            </div>

            <div className="text-success">
              {[0.03892, 0.038905, 0.038901].map((p, i) => (
                <div key={i} className="order-row">
                  <span>{p}</span>
                  <span className="text-dark">{(0.8 + i).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>


        <Card title="Quick Trade">
          <div className="trade-actions">
            <button className="btn-trade btn-buy">Buy</button>
            <button className="btn-trade btn-sell">Sell</button>
          </div>
          <label className="text-secondary text-small text-semi-bold">
            Amount
          </label>
          <div className="input-group">
            <input type="number" placeholder="0.00" className="input-main" />
            <div className="input-addon">BTC</div>
          </div>
          <button className="btn-trade btn-primary">Place Order</button>
        </Card>

      
        <Card title="Market Pairs">
          <table className="market-table">
            <thead>
              <tr>
                <th>Pair</th>
                <th>Price</th>
                <th className="text-right">Chg%</th>
              </tr>
            </thead>
            <tbody>
              {["BTC/USDT", "ETH/USDT", "SOL/USDT", "BNB/USDT", "XRP/USDT"].map(
                (pair, i) => (
                  <tr key={i}>
                    <td className="text-semi-bold">{pair}</td>
                    <td>{(Math.random() * 500).toFixed(2)}</td>
                    <td
                      className={`text-right ${i % 2 === 0 ? "text-success" : "text-danger"}`}
                    >
                      {i % 2 === 0 ? "+" : "-"}
                      {(Math.random() * 3).toFixed(2)}%
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </Card>
      </div>


      <footer className="dashboard-footer">
        <div>
          <span className="text-bold"></span> &copy; {currentYear} —{" "}
          <span className="text-bold">Ashutosh Aman</span>
        </div>
        <div className="footer-credits">
          Made with <Heart size={14} className="text-danger" /> in React
        </div>
      </footer>
    </div>
  );
}
