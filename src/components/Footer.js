import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/svgs/logo.svg";
import { ReactComponent as Telegram } from "assets/svgs/social/telegram.svg";
import { ReactComponent as Twitter } from "assets/svgs/social/twitter.svg";
import { ReactComponent as Binance } from "assets/svgs/binance.svg";
import { ReactComponent as Ethereum } from "assets/svgs/ethereum.svg";
import { ReactComponent as Solana } from "assets/svgs/solana.svg";
import { ReactComponent as Bubble } from "assets/svgs/bubble.svg";
import { LINKS } from "utils/constants";

const FooterWrapper = styled.div`
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
  padding: 32px 0px;
`;

const SubFooter = styled.div`
  background: linear-gradient(
      108.96deg,
      #f59848 -27.23%,
      #bd5103 67.08%,
      #573e2a 130.21%,
      #1f1f1f 155.87%
    ),
    linear-gradient(
      108.96deg,
      #f59848 -27.23%,
      #bd5103 13.89%,
      #573e2a 130.21%,
      #1f1f1f 155.87%
    );
  border: 1px solid #f59848;
`;

const Footer = () => {
  return (
    <div>
      <FooterWrapper className="relative mt-[103px] centers flex-col space-y-[20px]">
        <Bubble className="absolute left-[-126px] top-[-40px]" />
        <Logo />
        <span className="text-center text-white/[.4] text-12">
          Join our social media channels to participate in the discussion
        </span>
        <div className="justify-center flex items-center space-x-[40px] xl:space-x-[300px] xl:pt-[40.75px]">
          <a rel="noreferrer" target={"_blank"} href={LINKS.telegram}>
            <Telegram />
          </a>
          <a rel="noreferrer" target={"_blank"} href={LINKS.twitter}>
            <Twitter />
          </a>
        </div>
      </FooterWrapper>
      <SubFooter className="p-3 flex flex-col space-y-3 xl:flex-row xl:space-y-0 xl:py-[30px] xl:px-[80px] xl:justify-between">
        <p className="text-white text-12 xl:text-sm text-center">
          ©2022 ADIRIZE. All rights reserved
        </p>
        <div className="justify-center flex space-x-[30px] items-center">
          <span className="text-white text-sm font-medium">Multichain</span>
          <Binance />
          <Ethereum />
          <Solana />
        </div>
      </SubFooter>
    </div>
  );
};

export default Footer;
