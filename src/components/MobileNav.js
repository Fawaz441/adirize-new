import React from "react";
import styled from "styled-components";
import clsx from "classnames";
import { ReactComponent as Logo } from "assets/svgs/logo.svg";
import { ReactComponent as Exit } from "assets/svgs/exit.svg";
import { LINKS } from "utils/constants";

const MobileNavWrapper = styled.div`
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  transition:0.4s ease;
  opacity:0;
  pointer-events:none;
  

  background:#16171D;
  padding: 25px;
  z-index: 100;
  .underlay{
    pointer-events:none;
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%:  
    background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(254, 212, 26, 0.2) 0%,
    rgba(240, 114, 58, 0) 91.53%
  );
  }
  .login{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 0px;
gap: 8px;

width: 140px;
height: 48px;

/* Linear */

background: linear-gradient(108.96deg, #F59848 -27.23%, #BD5103 67.08%, #573E2A 130.21%, #1F1F1F 155.87%);
box-shadow: 0px 10px 60px rgba(254, 212, 26, 0.16), 0px 2px 0px #8F2800;
border-radius: 8px;
font-family: 'Josefin Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

display: flex;
align-items: center;
text-transform: capitalize;

/* Typograhy/Typograhy 5 */

color: #FFFFFF;
  }
`;

const MobileNav = ({ classNames, onClose }) => {
  return (
    <MobileNavWrapper className={clsx(classNames, "flex-col")}>
      <div className="underlay" />
      <div className="justify-between items-center flex mb-auto">
        <Logo />
        <Exit onClick={onClose} />
      </div>
      <div className="centers h-full">
        <ul className="flex flex-col space-y-[40px] h-full centers">
          <li>
            <a
              className="text-[18px] text-white text-center"
              href="#home"
              onClick={onClose}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[18px] text-white text-center"
              href="#roadmap"
              onClick={onClose}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              className="text-[18px] text-white text-center"
              href="#faqs"
              onClick={onClose}
            >
              FAQs
            </a>
          </li>
          <a
            className="login"
            href={LINKS.login}
            rel="noreferrer"
            target={"_blank"}
          >
            Login
          </a>
        </ul>
      </div>
    </MobileNavWrapper>
  );
};

export default MobileNav;
