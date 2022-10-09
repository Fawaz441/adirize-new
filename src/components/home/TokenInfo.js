import React from "react";
import styled from "styled-components";
import StableCoin from "../illustrations/StableCoin";
import { ReactComponent as StableCoin2 } from "assets/svgs/stable-coin-2.svg";

const Background = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.16) -27.23%,
    rgba(216, 44, 21, 0.16) -10.71%,
    rgba(189, 81, 3, 0.16) 67.08%,
    rgba(87, 62, 42, 0.16) 130.21%,
    rgba(31, 31, 31, 0.16) 155.87%
  );
  border-radius: 8px;
  padding: 24px !important;
`;

const Stability = styled.div`
  background: linear-gradient(
      0deg,
      rgba(87, 62, 42, 0.29),
      rgba(87, 62, 42, 0.29)
    ),
    linear-gradient(
      108.96deg,
      rgba(245, 152, 72, 0.12) -27.23%,
      rgba(189, 81, 3, 0.12) 67.08%,
      rgba(87, 62, 42, 0.12) 130.21%,
      rgba(31, 31, 31, 0.12) 155.87%
    );
  border-radius: 8px;
  padding: 16px 12px;
  @media (min-width: 1280px) {
    background: transparent;
  }
`;

const TokenInfo = () => {
  return (
    <div className="mt-[8.9px] xl:flex xl:items-center xl:justify-center px-4">
      <h3 className="lg-text text-[32px] text-center xl:hidden">
        Is ADI a Stable Coin?{" "}
      </h3>
      <div>
        <Background className="lg-border-btn mt-8 centers space-x-6 flex w-full !h-auto max-w-[367px] mx-auto">
          <span className="text-sm font-semibold text-white">
            How does it work?
          </span>
          <button className="lg-btn text-white px-4">Whitepaper</button>
        </Background>
        <Stability className="mt-8 w-full max-w-[523px]">
          <h3 className="lg-text text-[40px] !justify-start mb-6 !hidden xl:block">
            Is ADI a Stable Coin?
          </h3>
          <p className="text-sm text-[#E0E0E0]">
            ADI isn't a semi-centralized stablecoin like USDT or USDC. Instead,
            ADI intends to be a decentralized algorithmic reserve currency. Like
            the gold standard, ADI gives free-floating value to its users that
            they can always rely on, thanks to the fractional reserves from
            which it derives its inherent value.{" "}
          </p>
        </Stability>
      </div>
      <div className="xl:hidden">
        <StableCoin />
      </div>
      <StableCoin2 className="hidden xl:block" />
    </div>
  );
};

export default TokenInfo;
