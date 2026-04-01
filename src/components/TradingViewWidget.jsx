import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const scriptId = "tradingview-widget-script";
    let script = document.getElementById(scriptId);

    const createWidget = () => {
      if (window.TradingView && container.current) {
        new window.TradingView.widget({
          container_id: container.current.id,
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "H",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          save_image: false,
          height: 500,
          width: "100%",
        });
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.type = "text/javascript";
      script.onload = createWidget;
      document.head.appendChild(script);
    } else {
      createWidget();
    }

    
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "500px", width: "100%" }}
    >
      <div
        id="tradingview_chart_unique"
        ref={container}
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
};

export default TradingViewWidget;
