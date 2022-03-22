import React, { useState, useEffect } from "react";
import "./Featured.css";
// import BTC from '../../assets/btc-img.png'
// import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import CardUi from "./CardUi";
export const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);
  if (!data) return null;
  
  return (
    <div className="featured">
      <div className="container">
        {/* Left Side */}
        <div className="lef">
          <h2>Explore top Crypto's Bitcoin, Ethereum, and AltCoin</h2>
          <p>See all available assets: cryptocurrency's and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Right Side */}
        <div className="right">
          {data.map(data => (<CardUi key={data.id} data={data}/>))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
