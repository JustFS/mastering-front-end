import React, { useEffect, useState } from "react";
import axios from "axios";
import PercentChange from "./PercentChange";
import colors from "../styles/_settings.scss";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);
  const [btcPercent, setBtcPercent] = useState(null);
  const [ethPercent, setEthPercent] = useState(null);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      setHeaderData(res.data.data);
      setBtcPercent(res.data.data.market_cap_percentage.btc.toFixed(1));
      setEthPercent(res.data.data.market_cap_percentage.eth.toFixed(1));
    });
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="" /> Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies :{" "}
          {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Marchés : {headerData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :{" "}
          <strong
            style={{
              color:
                headerData.market_cap_change_percentage_24h_usd >= 0
                  ? colors.green1
                  : colors.red1,
            }}
          >
            <PercentChange
              percent={headerData.market_cap_change_percentage_24h_usd}
            />
          </strong>
        </li>
        <li>BTC dominance : {btcPercent}%</li>
        <li>ETH dominance : {ethPercent}%</li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
