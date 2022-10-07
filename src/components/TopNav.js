import React, { useEffect } from "react";
import { ReactComponent as Hamburger } from "assets/svgs/hamburger.svg";
import { ReactComponent as Logo } from "assets/svgs/logo.svg";
import MobileNav from "./MobileNav";

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
    <nav className="px-6 py-[22.67px] relative flex items-center justify-between topnav">
      <Logo />
      <Hamburger onClick={() => setShowNav(true)} />
      <div className="absolute bottom-0 left-0 w-full lg-btn !h-1" />
      <MobileNav
        onClose={() => setShowNav(false)}
        classNames={showNav ? "!opacity-100 !pointer-events-auto" : ""}
      />
    </nav>
  );
};

export default TopNav;
