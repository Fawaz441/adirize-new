import React from "react";
import styled from "styled-components";
import { ReactComponent as Dots } from "assets/svgs/dots.svg";

const Container = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.2) -27.23%,
    rgba(189, 81, 3, 0.2) 67.08%,
    rgba(87, 62, 42, 0.2) 130.21%,
    rgba(31, 31, 31, 0.2) 155.87%
  );
  border-radius: 12px;
  width: 48px;
  height: 52px;

  > span {
    text-shadow: 0px 0px 24px #fed41a;
  }
`;

const CountdownItem = ({ hideDots = false, value, label }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="centers flex flex-col space-y-2">
        <Container className="centers">
          <span className="text-white text-base font-bold">{value}</span>
        </Container>
        <span className="text-white text-12 font-semibold">{label}</span>
      </div>
      {!hideDots && <Dots className="!mr-2" />}
    </div>
  );
};

export default CountdownItem;
