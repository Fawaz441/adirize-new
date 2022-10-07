import React from "react";
import TopNav from "components/TopNav";
import Hero from "components/home/Hero";
import { ReactComponent as Ellipse } from "assets/svgs/ellipse.svg";
import TokenInfo from "components/home/TokenInfo";
import WiredTokens from "components/illustrations/WiredTokens";
import TokenomicsDiagram from "components/illustrations/TokenomicsDiagram";
import TokenomicsDetail from "components/home/TokenomicsDetail";
import Presale from "components/home/Presale";
import Roadmap from "components/home/Roadmap";
import HowToBenefit from "components/home/HowToBenefit";
import FAQ from "components/home/FAQ";
import Footer from "components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <TopNav />
      <Ellipse className="absolute top-0 left-[-527px]" />
      <div className="light-gradient">
        <Hero />
      </div>
      <TokenInfo />
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
      <div className="flex flex-col space-y-4 mt-[-80px]">
        <h4 className="text-[32px] lg-text font-bold text-center">
          $ADI Token
        </h4>
        <p className="text-white text-center text-sm">
          The Adirize protocol has created a reserve cryptocurrency called ADI.
          However, ADI should not beconfused with Tether or USDC, which are both
          stablecoins. Consider the Adirize system to be analogous to the gold
          standard in that it issues and backsADI tokens with a reserve of
          precious assets.
        </p>
        <div className="centers">
          <WiredTokens />
        </div>
        <div className="mt-[29.49px] bg-[#573E2A] rounded-[16px] p-8">
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
          className="ml-[-40px] mt-[-80px]"
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
        <h3 className="lg-text text-[24px] font-bold text-center mt-[-70px] pb-[70px]">
          Tokenomics
        </h3>
        <TokenomicsDiagram />
        <TokenomicsDetail />
        <Presale />
        <Roadmap />
        <HowToBenefit />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
