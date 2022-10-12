import React from "react";
import { ReactComponent as Layers2 } from "assets/svgs/layers-2.svg";

const HowToBenefit = () => {
  return (
    <div className="!mt-[100px]">
      <h3 className="lg-text text-[32px] font-bold text-center">
        How To Benefit With Adirize
      </h3>
      <p className="mt-[32px] text-center text-sm text-white xl:mt-12">
        To provide liquidity for the ecosystem, Adirize will employ two
        important techniques, staking and bonding.
      </p>
      <div className="mt-[40px] xl:mt-12 flex flex-col space-y-[40px] xl:flex-row xl:space-y-0 xl:justify-center">
        <div className="max-w-[600px] bg-[#CBB18A]/[.5] px-[14px] py-6 rounded-[16px] xl:w-1/2 xl:flex-shrink-0 xl:rounded-none xl:py-[64px] xl:px-[51px]">
          <div className="flex items-center justify-between">
            <span className="text-xl text-white font-semibold xl:text-[40px]">
              Staking
            </span>
            <Layers2 className="mt-[-3px]" />
          </div>
          <p className="mt-[32px] text-white text-sm xl:text-xl">
            Stakers are essential players in the ecosystem of Adirize. Holders
            can stake their ADI into the network, which contributes to the price
            stability of ADI over the long run. Stakeholders then receive their
            proportional share of rebases tokens and governance rights in
            exchange.
          </p>
          <button className="mt-8 border-[1px] border-white centers px-8 py-3 rounded-[4px] text-white text-sm">
            Staking
          </button>
        </div>
        <div className="max-w-[600px] bg-[#686069]/[.5] px-[14px] py-6 rounded-[16px] xl:w-1/2 xl:flex-shrink-0 xl:rounded-none xl:py-[64px] xl:px-[51px]">
          <div className="flex items-center justify-between">
            <span className="text-xl text-white font-semibold xl:text-[40px]">
              Bonding
            </span>
            <Layers2 className="mt-[-3px]" />
          </div>
          <p className="mt-[32px] text-white text-sm xl:text-xl">
            Bonding provides you with the opportunity to exchange other tokens
            for ADI at a reduced price. In exchange, bond sales provide the
            Adirize treasury with more liquidity and reserve assets, so aiding
            to the stability of the network.
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
