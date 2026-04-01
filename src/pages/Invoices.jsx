import React from "react";
import "./Invoices.css";
import { FileText, Download, Printer, Mail, Heart } from "lucide-react";

const transactions = [
  {
    id: "#TRAD-9421",
    date: "Mar 28, 2026",
    coin: "Bitcoin",
    type: "BUY",
    amount: "0.042 BTC",
    total: "$2,696.40",
    status: "Completed",
  },
  {
    id: "#TRAD-8842",
    date: "Mar 25, 2026",
    coin: "Ethereum",
    type: "SELL",
    amount: "1.50 ETH",
    total: "$5,175.00",
    status: "Completed",
    profit: "+$240.50",
  },
  {
    id: "#TRAD-7712",
    date: "Mar 20, 2026",
    coin: "Solana",
    type: "BUY",
    amount: "10.00 SOL",
    total: "$1,452.00",
    status: "Completed",
  },
  {
    id: "#TRAD-6651",
    date: "Mar 15, 2026",
    coin: "Bitcoin",
    type: "SELL",
    amount: "0.020 BTC",
    total: "$1,362.00",
    status: "Completed",
    profit: "+$115.20",
  },
  {
    id: "#TRAD-5540",
    date: "Mar 10, 2026",
    coin: "Cardano",
    type: "SELL",
    amount: "500 ADA",
    total: "$225.00",
    status: "Completed",
    profit: "-$12.40",
  },
];

export default function Invoices() {
  const handlePrint = () => window.print();

  return (
    <div className="invoice-container">
     
          
      <header className="invoice-header">
        <div className="invoice-title">
          <h1>Invoices & Billing</h1>
          <p className="invoice-subtitle">
            Manage your trading receipts and transaction history.
          </p>
        </div>
        <div className="header-actions">
          <button onClick={handlePrint} className="btn-action btn-outline">
            <Printer size={16} /> Print
          </button>
          <button className="btn-action btn-filled">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </header>

     
      <section className="billing-card">
        <div>
          <h6 className="info-label">Billed To</h6>
          <h4 className="user-name">Ashutosh Aman</h4>
          <div className="user-detail">
            <Mail size={14} /> ashutoshaman@duck.com
          </div>
          <p className="invoice-subtitle">
            Full-Stack Developer & Crypto Trader
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h6 className="info-label">Account Summary</h6>
          <div className="summary-value">$10,910.80</div>
          <p className="profit-text">Total Realized Profit: +$343.30</p>
        </div>
      </section>

     
          
      <div className="transaction-table-container">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Trade ID</th>
              <th>Date</th>
              <th>Asset</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Total Cost</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((row, i) => (
              <tr key={i}>
                <td className="trade-id">{row.id}</td>
                <td className="text-secondary">{row.date}</td>
                <td style={{ fontWeight: 700 }}>{row.coin}</td>
                <td>
                  <span
                    className={`badge ${row.type === "BUY" ? "badge-buy" : "badge-sell"}`}
                  >
                    {row.type}
                  </span>
                </td>
                <td>{row.amount}</td>
                <td style={{ fontWeight: 600 }}>{row.total}</td>
                <td
                  style={{
                    color: row.profit?.startsWith("+") ? "#4bbf73" : "#d9534f",
                    fontWeight: 700,
                  }}
                >
                  {row.profit || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <footer className="statement-summary">
        <FileText size={40} color="#adb5bd" style={{ marginBottom: "15px" }} />
        <h3>Monthly Statement Summary</h3>
        <p
          className="invoice-subtitle"
          style={{ maxWidth: "500px", margin: "0 auto 20px" }}
        >
          This statement includes all verified peer-to-peer and exchange
          transactions for the period of March 2026.
        </p>

        <div className="summary-details-box">
          <div className="summary-row">
            <span>Total Buy Volume:</span> <strong>$4,148.40</strong>
          </div>
          <div className="summary-row">
            <span>Total Sell Volume:</span> <strong>$6,762.40</strong>
          </div>
          <hr style={{ opacity: 0.1 }} />
          <div className="summary-row net-balance">
            <span>Net Balance:</span> <span>$10,910.80</span>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <button onClick={handlePrint} className="btn-action btn-dark">
            <Printer size={18} /> Generate Official PDF Invoice
          </button>
        </div>
      </footer>
    </div>
  );
}
