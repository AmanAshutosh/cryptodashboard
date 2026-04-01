import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  // Interval set kiya hai jo percentage badhayega
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Randomly 5 se 15 ke beech percentage badhega
        const next = prev + Math.floor(Math.random() * 10) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80); // Har 80ms mein speed update hogi

    return () => clearInterval(timer);
  }, []);

  // Jab progress 100 ho jaye, toh screen hide kar do
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(onFinished, 400); // 400ms ka chota pause professional feel ke liye
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="percentage-display">
          {progress}<span className="percent-symbol">%</span>
        </div>
        
        {/* Progress Bar UI */}
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loading-status">SECURE CONNECTION ESTABLISHING...</div>
      </div>
      
      {/* Background mein halka sa glow effect */}
      <div className="loading-bg-glow" />
    </div>
  );
};

export default LoadingScreen;