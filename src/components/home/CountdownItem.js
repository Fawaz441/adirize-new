import React from "react";
import styled from "styled-components";
import { ReactComponent as Dots } from "assets/svgs/dots.svg";
import { ReactComponent as DotsLarge } from "assets/svgs/dots-large.svg";

const Container = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.2) -27.23%,
    rgba(189, 81, 3, 0.2) 67.08%,
    rgba(87, 62, 42, 0.2) 130.21%,
    rgba(31, 31, 31, 0.2) 155.87%
  );
  border-radius: 12px;

  > span {
    text-shadow: 0px 0px 24px #fed41a;
  }
`;

const CountdownItem = ({ hideDots = false, value, label }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="centers flex flex-col space-y-2">
        <Container className="centers h-[52px] w-[48px] xl:w-[72px] xl:h-[80px] xl:p-6">
          <span className="text-white text-base font-bold xl:text-2xl">
            {value}
          </span>
        </Container>
        <span className="text-white text-12 font-semibold xl:text-base">
          {label}
        </span>
      </div>
      {!hideDots && <Dots className="!mr-2 xl:hidden" />}
      {!hideDots && <DotsLarge className="!mr-2 hidden xl:block" />}
    </div>
  );
};

export default CountdownItem;
