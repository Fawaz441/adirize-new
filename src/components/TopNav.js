import React, { useEffect } from "react";
import clsx from "classnames";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Hamburger } from "assets/svgs/hamburger.svg";
import { ReactComponent as Logo } from "assets/svgs/logo.svg";
import { largeScreenClasses, LINKS } from "utils/constants";
import MobileNav from "./MobileNav";

const FakeBg = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.05) -27.23%,
    rgba(189, 81, 3, 0.05) 20.1%,
    rgba(190, 84, 3, 0.05) 56.48%,
    rgba(210, 139, 0, 0.05) 69.51%,
    rgba(202, 117, 1, 0.05) 108.78%,
    rgba(87, 62, 42, 0.05) 130.21%,
    rgba(31, 31, 31, 0.05) 155.87%
  );
`;

const variants = {
  animate: { opacity: 1 },
  hidden: { opacity: 0 },
};

const TopNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  useEffect(() => {
    if (showNav) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "scroll";
    }
  }, [showNav]);
  return (
    <nav className="relative topnav xl:!bg-none xl:px-[78px] xl:pt-[40px]">
      <FakeBg className="absolute h-[153px] hidden xl:block top-0 left-0 w-full z-[1] " />
      <motion.div
        variants={variants}
        animate="animate"
        hidden="hidden"
        className={clsx(
          "px-6 py-[22.67px] z-[2] relative flex items-center justify-between xl:py-[30px] xl:px-8 xl:border-[1px] xl:border-[#F59848] xl:bg-[#fff]/[0.23] xl:rounded-2xl",
          largeScreenClasses
        )}
      >
        <Logo />
        <ul className="xl:flex items-center space-x-[73.67px] hidden">
          <li>
            <a className="text-[#e3e3e3] text-base" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="text-[#e3e3e3] text-base" href="#roadmap">
              Roadmap
            </a>
          </li>
          <li>
            <a className="text-[#e3e3e3] text-base" href="#faqs">
              FAQ
            </a>
          </li>
        </ul>
        <a
          href={LINKS.login}
          target="_blank"
          rel="noreferrer"
          className="lg-btn hidden xl:flex items-center justify-center px-[56px]"
        >
          <span className="text-white text-sm">Login</span>
        </a>
        <Hamburger onClick={() => setShowNav(true)} className="xl:hidden" />
        <div className="absolute bottom-0 left-0 w-full lg-btn !h-1 xl:hidden" />
        <MobileNav
          onClose={() => setShowNav(false)}
          classNames={showNav ? "!opacity-100 !pointer-events-auto" : ""}
        />
      </motion.div>
    </nav>
  );
};

export default TopNav;
