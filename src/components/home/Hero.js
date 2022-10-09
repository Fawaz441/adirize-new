import React from "react";
import CountdownItem from "./CountdownItem";
import { ReactComponent as Waves } from "assets/svgs/waves.svg";
import { ReactComponent as MachineLeft } from "assets/svgs/machine-left.svg";
import { ReactComponent as MachineRight } from "assets/svgs/machine-right.svg";
import { ReactComponent as GovernanceModel } from "assets/svgs/governance-model.svg";
import { ReactComponent as Intersect2 } from "assets/svgs/intersect2.svg";
import { useCountdown } from "hooks/useCountdown";
import styled from "styled-components";
import { LINKS } from "utils/constants";

const GovernanceModelDiv = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.13) -27.23%,
    rgba(189, 81, 3, 0.13) 20.1%,
    rgba(190, 84, 3, 0.13) 56.48%,
    rgba(210, 139, 0, 0.13) 69.51%,
    rgba(202, 117, 1, 0.13) 108.78%,
    rgba(87, 62, 42, 0.13) 130.21%,
    rgba(31, 31, 31, 0.13) 155.87%
  );
  backdrop-filter: blur(100px);
  border: 1.5px solid #f59848;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const Hero = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 12, 31));
  return (
    <div className="relative pt-[44px] px-[22px]">
      <h3 className="text-24 xl:text-[48px] text-center text-white font-bold">
        Unlock the World Of
        <br className="xl:hidden" /> Decentralized
        <br className="xl:hidden" /> Reserve <br className="hidden xl:block" />{" "}
        Currency with <span className="lg-text !inline-block">Adirize DAO</span>
      </h3>
      <p className="text-center text-white text-12 leading-[22px] mx-auto mt-8 xl:mt-[31px] xl:text-base xl:text-[#E0E0E0] max-w-[811px] xl:mx-auto">
        With the continued growth and development of the blockchain-DeFi niche,
        as well as an urgent need to address the limitation, there is a need for
        a decentralized reserve protocol that will change centralized USD (prone
        to depreciate).
      </p>
      <div className="mt-8 xl:mt-[27px] flex centers space-x-8">
        <a
          className="lg-btn px-8 centers"
          href={LINKS.presale}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-white font-semibold text-sm">Buy Now</p>
        </a>
        <button className="lg-border-btn">
          <p className="text-white font-semibold text-sm">Audit</p>
        </button>
      </div>
      <div className="mt-8 xl:mt-[44px] centers flex-col space-y-4">
        <h4 className="lg-text text-base font-bold xl:hidden">
          Token Public Launch
        </h4>
        <div className="flex flex-row justify-center">
          <MachineLeft className="hidden xl:block" />
          <div className="launch-box p-3 xl:w-[484px] xl:mx-[94px] xl:h-[208px] flex items-center justify-center ">
            <div className="flex flex-col space-y-4 items-center justify-center">
              <span className="text-white text-base font-bold hidden xl:block">
                TOKEN PUBLIC LAUNCH
              </span>
              <div className="flex">
                <CountdownItem label={"Days"} value={days} />
                <CountdownItem label={"Hours"} value={hours} />
                <CountdownItem label={"Minutes"} value={minutes} />
                <CountdownItem label={"Seconds"} value={seconds} hideDots />
              </div>
            </div>
          </div>
          <MachineRight className="hidden xl:block" />
        </div>
        <Waves className="h-[116px] w-full xl:hidden" />
        <div className="hidden xl:block">
          <Intersect2 />
          <div className="bg-[#1C1C1C] w-full mt-[-150px] pb-[150px]">
            <h3 className="text-[48px] text-[#F59848] text-center">
              ADI Governance Model
            </h3>
            <div className="mt-8 flex space-x-[144px] justify-center items-center">
              <GovernanceModel />
              <GovernanceModelDiv className="pt-[32px] pb-[22px] max-w-[543px] px-[10px] text-center text-white text-xl">
                Adirize is DAO-governed. All decisions are formed by community
                members on the forum and made by token holders through voting.
                is utilized to control the decentralized Adirize protocol in
                addition to being a treasury-backed reserve currency.
              </GovernanceModelDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
