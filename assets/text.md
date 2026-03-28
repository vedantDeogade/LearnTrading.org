<!-- Live Market Preview -->
                <div class="live-market-preview fade-in-up delay-2">
                    <h3 style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="width: 10px; height: 10px; background: #588157; border-radius: 50%; display: inline-block; "></span>
                        Live Markets
                    </h3>
                    <div class="market-stats-grid">
                        <div class="market-stat-card" id="stat-nifty">
                            <div class="symbol">NIFTY 50</div>
                            <div class="price">22,450.30</div>
                            <div class="change positive">+0.85%</div>
                        </div>
                        <div class="market-stat-card" id="stat-sensex">
                            <div class="symbol">SENSEX</div>
                            <div class="price">73,890.20</div>
                            <div class="change positive">+0.72%</div>
                        </div>
                        <div class="market-stat-card" id="stat-btc">
                            <div class="symbol">BTC/USD</div>
                            <div class="price">$68,742.30</div>
                            <div class="change positive">+1.83%</div>
                        </div>
                        <div class="market-stat-card" id="stat-eth">
                            <div class="symbol">ETH/USD</div>
                            <div class="price">$3,245.80</div>
                            <div class="change positive">+2.14%</div>
                        </div>
                    </div>



                    
                    <!-- Mini Chart Widget -->
                    <div style="padding: 0 1rem 1rem;">
                        <div class="tradingview-widget-container" style="height: 220px;">
                            <div id="tradingview-mini-chart"></div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
                            {
                                "symbol": "NSE:NIFTY",
                                "width": "100%",
                                "height": "220",
                                "locale": "en",
                                "dateRange": "1D",
                                "colorTheme": "light",
                                "isTransparent": true,
                                "autosize": false,
                                "largeChartUrl": "dashboard.html"
                            }
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- HTML !-->
<button class="button-85" role="button">Button 85</button>

/* CSS */
.button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}