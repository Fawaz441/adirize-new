import React from "react";
import CountdownItem from "./CountdownItem";
import { ReactComponent as Waves } from "assets/svgs/waves.svg";

const Hero = () => {
  return (
    <div className="relative pt-[44px] px-[22px]">
      <h3 className="text-24 text-center text-white font-bold">
        Unlock the World Of
        <br />
        Decentralized Reserve Currency
        <br />
        with <span className="lg-text">Adirize DAO</span>
      </h3>
      <p className="text-center text-white text-12 leading-[22px] mt-8">
        With the continued growth and development of the blockchain-DeFi niche,
        as well as an urgent need to address the limitation, there is a need for
        a decentralized reserve protocol that will change centralized USD (prone
        to depreciate).
      </p>
      <div className="mt-8 flex centers space-x-8">
        <button className="lg-btn px-8">
          <p className="text-white font-semibold text-sm">Buy Now</p>
        </button>
        <button className="lg-border-btn">
          <p className="text-white font-semibold text-sm">Audit</p>
        </button>
      </div>
      <div className="mt-8 centers flex-col space-y-4">
        <h4 className="lg-text text-base font-bold">Token Public Launch</h4>
        <div className="launch-box p-3 flex justify-center">
          <CountdownItem label={"Days"} value={10} />
          <CountdownItem label={"Hours"} value={22} />
          <CountdownItem label={"Minutes"} value={23} />
          <CountdownItem label={"Seconds"} value={"06"} hideDots />
        </div>
        <Waves className="h-[116px] w-full" />
      </div>
    </div>
  );
};

export default Hero;
