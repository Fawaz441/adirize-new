import React from "react";
import { ReactComponent as Layers2 } from "assets/svgs/layers-2.svg";

const HowToBenefit = () => {
  return (
    <div className="mt-[100px]">
      <h3 className="lg-text text-[32px] font-bold text-center">
        How To Benefit With Adirize
      </h3>
      <p className="mt-[32px] text-center text-sm">
        Adirize DAO's protocol employs two important techniques to achieve its
        monetary policy goals Staking and Bonding.{" "}
      </p>
      <div className="mt-[40px] flex flex-col space-y-[40px]">
        <div className="bg-[#CBB18A]/[.5] px-[14px] py-6 rounded-[16px]">
          <div className="flex items-center justify-between">
            <span className="text-xl text-white font-semibold">Staking</span>
            <Layers2 className="mt-[-3px]" />
          </div>
          <p className="mt-[32px] text-white text-sm">
            Use the Adirize app to stake your $ADI in exchange for benefits,
            such as extra ADI, which theTreasury gets through bond sales.
          </p>
          <button className="mt-8 border-[1px] border-white centers px-8 py-3 rounded-[4px] text-white text-sm">
            Staking
          </button>
        </div>
        <div className="bg-[#686069]/[.5] px-[14px] py-6 rounded-[16px]">
          <div className="flex items-center justify-between">
            <span className="text-xl text-white font-semibold">Bonding</span>
            <Layers2 className="mt-[-3px]" />
          </div>
          <p className="mt-[32px] text-white text-sm">
            Although ADI staking is the protocol's primary method of
            accumulating value, staking relies on bonding to generate incentives
            and lock up liquidity.
          </p>
          <button className="mt-8 border-[1px] border-white centers px-8 py-3 rounded-[4px] text-white text-sm">
            Bonding
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToBenefit;