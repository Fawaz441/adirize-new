import React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as Waves } from "assets/svgs/waves.svg";
import { ReactComponent as MachineLeft } from "assets/svgs/machine-left.svg";
import { ReactComponent as MachineRight } from "assets/svgs/machine-right.svg";
import { ReactComponent as GovernanceModel } from "assets/svgs/governance-model.svg";
import { ReactComponent as Intersect2 } from "assets/svgs/intersect2.svg";
import { ReactComponent as Blur } from "assets/svgs/blur.svg";
import { useCountdown } from "hooks/useCountdown";
import { LINKS } from "utils/constants";
import {
  fadeIn,
  buttons,
  publicLunchStagger,
  publicLunchChild,
} from "animations";
import CountdownItem from "./CountdownItem";

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
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 11, 2));
  const time = useTime();
  const translateY = useTransform(time, [0, 2000], [0, 0], { clamp: true });
  return (
    <div className="relative pt-[44px] px-[22px]" id="home">
      <motion.h3
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-24 xl:text-[48px] text-center text-white font-bold"
      >
        Unlock the World Of
        <br className="xl:hidden" /> Decentralized
        <br className="xl:hidden" /> Reserve <br className="hidden xl:block" />{" "}
        Currency with <span className="lg-text !inline-block">Adirize DAO</span>
      </motion.h3>
      <motion.p
        variants={{
          ...fadeIn,
          animate: {
            ...fadeIn.animate,
            transition: { delay: 0.3, type: "spring" },
          },
        }}
        initial="initial"
        animate="animate"
        className="text-center text-white text-12 leading-[22px] mx-auto mt-8 xl:mt-[31px] xl:text-base xl:text-[#E0E0E0] max-w-[811px] xl:mx-auto"
      >
        AdirizeDAO is developing ADI, a Web3 decentralized reserve currency that
        is fully liquid, backed by assets and controlled 100% by the community.
      </motion.p>
      <motion.div
        variants={buttons}
        animate="animate"
        initial="initial"
        className="mt-8 xl:mt-[27px] flex centers space-x-8"
      >
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
      </motion.div>
      <div
        className="mt-8 xl:mt-[44px] centers flex-col space-y-4 relative"
        animate="animate"
      >
        <h4 className="lg-text text-base font-bold xl:hidden">
          Token Public Launch
        </h4>
        <motion.div
          className="flex flex-row justify-center"
          initial="initial"
          animate="animate"
          variants={publicLunchStagger}
        >
          <motion.div
            style={{
              translateY,
            }}
          >
            <MachineLeft className="hidden xl:block" />
          </motion.div>
          <motion.div
            className="launch-box p-3 xl:w-[484px] xl:mx-[94px] xl:h-[208px] flex items-center justify-center relative"
            variants={publicLunchChild}
          >
            <Blur className="absolute top-[-100px] left-[-150px] xl:left-auto xl:right-[-100px]" />
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
          </motion.div>
          <motion.div
            style={{
              translateY,
            }}
          >
            <MachineRight className="hidden xl:block" />
          </motion.div>
        </motion.div>
        <Waves className="h-[116px] w-full xl:hidden" />
        <div className="hidden xl:block" id="governance-model">
          <Intersect2 />
          <div className="bg-[#1C1C1C] w-full mt-[-150px] pb-[150px]">
            <h3 className="text-[48px] text-[#F59848] text-center">
              ADI Governance Model
            </h3>
            <div className="mt-8 flex space-x-[144px] justify-center items-center">
              <GovernanceModel />
              <GovernanceModelDiv
                id="governance-model-text"
                className="pt-[32px] pb-[22px] max-w-[543px] px-[10px] text-center text-white text-xl"
              ></GovernanceModelDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
