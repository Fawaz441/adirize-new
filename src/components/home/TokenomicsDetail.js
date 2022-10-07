import React from "react";
import styled from "styled-components";
import clsx from "classnames";
import { ReactComponent as Pillar } from "assets/svgs/pillar.svg";

const Table = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.2) -27.23%,
    rgba(189, 81, 3, 0.2) 67.08%,
    rgba(87, 62, 42, 0.2) 130.21%,
    rgba(31, 31, 31, 0.2) 155.87%
  );
  padding: 16px;
  border: 2px solid #f59848;
`;

const data = [
  { field: "Token Name", value: "Adirize" },
  { field: "Standard", value: "BEP-20" },
  { field: "Ticker", value: "ADI" },
  { field: "Token Supply", value: "100,000,000" },
];

const tableData = [
  {
    chart: "#F59848",
    token_amount: "Public Sale",
    percentage: "30%",
    token_distribution: "30,000,000",
  },
  {
    chart: "#D28B00",
    token_amount: "Community Pool",
    percentage: "30%",
    token_distribution: "30,000,000",
  },
  {
    chart: "#D1A176",
    token_amount: "Capital Reserve",
    percentage: "20%",
    token_distribution: "20,000,000",
  },
  {
    chart: "#573E2A",
    token_amount: "Ecosystem Grants",
    percentage: "10%",
    token_distribution: "10,000,000",
  },
  {
    chart: "#BD5103",
    token_amount: "Staking Rewards",
    percentage: "10%",
    token_distribution: "10,000,000",
  },
];

const TokenomicsDetail = () => {
  return (
    <div>
      <div className="lg-border-btn flex space-x-[40.33px] !h-auto !p-2 overflow-hidden">
        {data.map((item, key) => (
          <div key={key}>
            <span className="text-12 text-white font-semibold text-center">
              {item.field}
            </span>
            <span className="lg-text text-base font-bold">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="h-[40px] w-full relative">
        <Pillar className="absolute left-[25%]" />
        <Pillar className="absolute left-[75%]" />
      </div>
      <Table className="w-full p-4">
        <div className="grid grid-cols-[10%_30%_20%_40%] mb-4 space-x-2">
          <span className="text-12 font-bold lg-text !justify-start">
            Chart
          </span>
          <span className="text-12 font-bold lg-text !justify-start">
            Token Amount
          </span>
          <span className="text-12 font-bold lg-text !justify-start">
            Percentage
          </span>
          <span className="text-12 font-bold lg-text !justify-start">
            Token Distributiom
          </span>
        </div>
        {tableData.map((data, index) => (
          <div
            className={clsx("grid grid-cols-[10%_30%_20%_40%] space-x-2 mb-4", {
              "!mb-[18px]": index + 1 === data.length,
            })}
            key={index}
          >
            <div
              className="h-3 w-3 rounded-[4px]"
              style={{ backgroundColor: data.chart }}
            />
            <span className="text-12 text-white">{data.token_amount}</span>
            <span className="text-12 text-white">{data.percentage}</span>
            <span className="text-12 text-white">
              {data.token_distribution}
            </span>
          </div>
        ))}
      </Table>
    </div>
  );
};

export default TokenomicsDetail;
