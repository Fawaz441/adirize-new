import React from "react";
import styled from "styled-components";
import StableCoin from "../illustrations/StableCoin";

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
`;

const TokenInfo = () => {
  return (
    <div className="mt-[8.9px]">
      <h3 className="lg-text text-[32px] text-center">
        Is ADI a Stable Coin?{" "}
      </h3>
      <Background className="lg-border-btn mt-8 centers space-x-6 flex w-full !h-auto">
        <span className="text-sm font-semibold text-white">
          How does it work?
        </span>
        <button className="lg-btn text-white px-4">Whitepaper</button>
      </Background>
      <Stability className="mt-8 w-full">
        <p className="text-sm text-[#E0E0E0]">
          ADI isn't a semi-centralized stablecoin like USDT or USDC. Instead,
          ADI intends to be a decentralized algorithmic reserve currency. Like
          the gold standard, ADI gives free-floating value to its users that
          they can always rely on, thanks to the fractional reserves from which
          it derives its inherent value.{" "}
        </p>
      </Stability>
      <StableCoin />
    </div>
  );
};

export default TokenInfo;
