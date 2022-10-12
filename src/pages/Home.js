import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useTime, useTransform } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

import { ReactComponent as Ellipse } from "assets/svgs/ellipse.svg";
import { ReactComponent as Intersect2 } from "assets/svgs/intersect-2.svg";
import { ReactComponent as Waves } from "assets/svgs/waves2.svg";
import { ReactComponent as GlowingDisk } from "assets/svgs/glowing-disk.svg";
import { ReactComponent as Roundball } from "assets/svgs/roundball.svg";
import { ReactComponent as DougnutDisk } from "assets/svgs/doughnut-disk.svg";
import TopNav from "components/TopNav";
import Hero from "components/home/Hero";
import TokenInfo from "components/home/TokenInfo";
import WiredTokens from "components/illustrations/WiredTokens";
import TokenomicsDiagram from "components/illustrations/TokenomicsDiagram";
import TokenomicsDetail from "components/home/TokenomicsDetail";
import Presale from "components/home/Presale";
import Roadmap from "components/home/Roadmap";
import HowToBenefit from "components/home/HowToBenefit";
import FAQ from "components/home/FAQ";
import Footer from "components/Footer";
import LargePresale from "components/home/LargePresale";

import { largeScreenClasses } from "utils/constants";

const Home = () => {
  let home = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    let ctx = gsap.context(() => {
      gsap.to(["#machine-left", "#machine-right"], {
        y: 40,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 3,
      });

      gsap.from("#governance-model-svg", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: "#governance-model",
          toggleActions: "play play restart reverse",
        },
      });

      gsap.from("#tokenomics-big-svg", {
        scale: 0.5,
        duration: 1,
        rotate: 360,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#tokenomics",
          toggleActions: "play play restart reverse",
        },
      });

      gsap.to("#governance-model-text", {
        text: `Adirize is DAO-governed. All decisions are formed by community
        members on the forum and made by token holders through voting.
        is utilized to control the decentralized Adirize protocol in
        addition to being a treasury-backed reserve currency.`,
        duration: 5,
        scrollTrigger: "#governance-model",
      });
    }, home);

    return () => ctx.revert();
  }, []);
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <div className="relative" ref={home}>
      <TopNav />
      <GlowingDisk className="mt-[472px] left-0 absolute"></GlowingDisk>
      <DougnutDisk className="absolute right-[100px] top-[100px]" />
      <Ellipse className="absolute top-0 left-[-527px]" />
      <div className="light-gradient">
        <Hero />
      </div>
      <TokenInfo />
      <div className="xl:hidden centers translate-x-[30px]">
        <svg
          className="ml-[-50px] mt-[-50px]"
          width="428"
          height="209"
          viewBox="0 0 428 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M592 208.743V0C559.602 42.5001 473.364 113.882 387.594 59.4074C304.086 6.37045 156.143 31.7385 56.4519 48.8327C28.1522 53.6853 3.74089 57.8711 -14.2044 59.4074C-79.1334 64.966 -140.455 22.1186 -163 0V209C-108.636 166.474 38.8748 83.7263 207.236 83.7263C375.257 83.7263 532.308 166.141 592 208.743Z"
            fill="url(#paint0_linear_245_2613)"
            fillOpacity="0.16"
          />
          <defs>
            <linearGradient
              id="paint0_linear_245_2613"
              x1="-282.912"
              y1="-125.973"
              x2="448.3"
              y2="781.446"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F59848" />
              <stop offset="0.0902371" stopColor="#D82C15" />
              <stop offset="0.515115" stopColor="#BD5103" />
              <stop offset="0.859876" stopColor="#573E2A" />
              <stop offset="1" stopColor="#1F1F1F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden xl:block mt-[-100px]">
        <Intersect2 className="6xl:hidden mx-auto" />
        <motion.div
          className="absolute top-[400px] left-[100px]"
          style={{ rotate }}
        >
          <Roundball />
        </motion.div>
      </div>
      <div className="flex flex-col space-y-4 mt-[-80px] px-4">
        <h4 className="text-[48px] lg-text font-bold text-center !hidden xl:!block">
          $ADI Token
        </h4>
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center xl:space-x-[60px] w-full">
          <h4 className="text-[32px] lg-text font-bold text-center xl:hidden">
            $ADI Token
          </h4>
          <div className="flex flex-col items-center justify-center max-w-[550px] !mx-auto xl:!mx-0">
            <p className="text-white text-center text-sm !mx-auto">
              ADI is the native token of the Adirize DAO ecosystem and a
              decentralized reserve currency that is not pegged to the US
              Dollar. Adirize is developing a strong and ever-growing treasury
              that provides stability allowing the project to grow.
              <br />
              <br /> Each ADI is backed by $1 worth of assets from the treasury.
              This means that the price can not drop below $1 as the treasury
              will buy the tokens back and burn the ADI when this happens,
              therefore increasing the value of the tokens in circulation. As
              there is no upper limit, the price of ADI has no cap when trading
              in an upwards motion.
            </p>
          </div>
          <div className="centers xl:!items-start xl:!justify-start">
            <WiredTokens />
          </div>
        </div>
        <div className="mt-[29.49px] bg-[#573E2A] rounded-[16px] p-8 xl:hidden">
          <p className="lg-text text-sm text-center">
            “The ADI Token Acts as Both a Stable Currency and a Governance Token
            for the Protocol.”
          </p>
        </div>
        <div className="mt-[9.73px] centers">
          <div className="ml-[100px] h-[49px] w-[49px] rounded-full bg-[#DB1205] centers">
            <div className="h-5 w-5 rounded-full bg-black" />
          </div>
        </div>
        <svg
          className="ml-[-40px] mt-[-80px] xl:hidden"
          width="428"
          height="209"
          viewBox="0 0 428 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-140 0.257462V209C-107.602 166.5 -21.3643 95.1184 64.4061 149.593C147.914 202.63 295.857 177.262 395.548 160.167C423.848 155.315 448.259 151.129 466.204 149.593C531.133 144.034 592.455 186.881 615 209V0C560.636 42.5257 413.125 125.274 244.764 125.274C76.7429 125.274 -80.3081 42.8587 -140 0.257462Z"
            fill="url(#paint0_linear_245_2611)"
            fillOpacity="0.16"
          />
          <defs>
            <linearGradient
              id="paint0_linear_245_2611"
              x1="734.912"
              y1="334.973"
              x2="3.69989"
              y2="-572.446"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F59848" />
              <stop offset="0.0902371" stopColor="#D82C15" />
              <stop offset="0.515115" stopColor="#BD5103" />
              <stop offset="0.859876" stopColor="#573E2A" />
              <stop offset="1" stopColor="#1F1F1F" />
            </linearGradient>
          </defs>
        </svg>
        <h3 className="lg-text text-[24px] font-bold text-center mt-[-70px] pb-[70px] xl:pb-[32px] xl:text-[48px]">
          Tokenomics
        </h3>
        <div className={largeScreenClasses}>
          <TokenomicsDiagram />
          <TokenomicsDetail />
        </div>
        <div className="xl:hidden">
          <Presale />
          <Roadmap />
        </div>
        <div className="hidden xl:block" id="roadmap">
          <LargePresale />
        </div>
        <div className="hidden xl:block mt-[117px] pb-[153.98px] relative">
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
            <Waves className="w-full" />
          </div>
        </div>
        <HowToBenefit />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
