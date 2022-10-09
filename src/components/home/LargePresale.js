import React from "react";
import styled from "styled-components";
import clsx from "classnames";
import { ReactComponent as RoadMapLarge } from "assets/svgs/roadmap-large.svg";

const PresaleStagesWrapper = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.06) -27.23%,
    rgba(189, 81, 3, 0.06) 20.1%,
    rgba(210, 139, 0, 0.06) 97.96%,
    rgba(202, 117, 1, 0.06) 108.78%,
    rgba(87, 62, 42, 0.06) 130.21%,
    rgba(31, 31, 31, 0.06) 155.87%
  );
  backdrop-filter: blur(60px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  max-width: 1200px;
`;

const StagesTable = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.02) -27.23%,
    rgba(189, 81, 3, 0.02) 67.08%,
    rgba(87, 62, 42, 0.02) 130.21%,
    rgba(31, 31, 31, 0.02) 155.87%
  );
  border-radius: 24px;
  border: 1px solid #bd5103;
`;

const fields = [
  { name: "token name", value: "Adirize DAO" },
  { name: "ticker", value: "$ADI" },
  { name: "Total Supply", value: "1.000.000.000" },
  { name: "STANDARD", value: "BEP-20" },
];

const tableFields = [
  {
    name: "stage 1",
    amount_of_token: "180.000.000",
    allocated: "18",
    start_date: "1 August",
    end_date: "29 August",
    weeks: "4",
  },
  {
    name: "stage 2",
    amount_of_token: "75.000.000",
    allocated: "7.5",
    start_date: "29 August",
    end_date: "2 November",
    weeks: "9.285714286",
  },
  {
    name: "stage 3",
    amount_of_token: "45.000.000",
    allocated: "4.5",
    start_date: "2 November",
    end_date: "16 January",
    weeks: "10.71428571",
    hidden_border: true,
  },
];

const LargePresale = () => {
  return (
    <div className="flex flex-col space-y-[270px]">
      <div className="flex flex-col space-y-[48px]">
        <h3 className="lg-text text-[48px] text-center">Presale Stages</h3>
        <PresaleStagesWrapper className="flex mx-auto w-[1200px] py-[28px]">
          {fields.map((field, index) => (
            <div
              className="w-[25%] relative flex-shrink-0 flex flex-col space-y-1 items-center justify-center"
              key={index}
            >
              {index !== fields.length - 1 && (
                <div className="absolute right-0 top-0 h-[40px] w-[1px] bg-[#F0723A]/[0.4]"></div>
              )}
              <span className="text-white text-12 font-bold uppercase">
                {field.name}
              </span>
              <h3 className="lg-text text-[28px] font-bold">{field.value}</h3>
            </div>
          ))}
        </PresaleStagesWrapper>
        <StagesTable className="w-[1200px] mx-auto py-[27px]">
          <div className="flex">
            <div className="flex flex-col items-center space-y-[40px] w-[25%] border-r-[1px] border-r-[#F0723A]/[0.4]">
              <span className="opacity-0 pointer-events-none text-sm text-white uppercase ">
                {" "}
                Amount of Token
              </span>
              <span className="text-sm text-white uppercase">
                Amount of Token
              </span>
              <span className="text-sm text-white uppercase">% Allocated</span>
              <span className="text-sm text-white uppercase">START DATE</span>
              <span className="text-sm text-white uppercase">END DATE</span>
              <span className="text-sm text-white uppercase">WEEKS</span>
            </div>
            {tableFields.map((field, index) => (
              <div
                className={clsx(
                  "flex flex-col items-center space-y-[40px] w-[25%]",
                  {
                    "border-r-[1px] border-r-[#F0723A]/[0.4]":
                      !field.hidden_border,
                  }
                )}
                key={index}
              >
                <span className="text-sm font-bold text-white text-center uppercase">
                  {field.name}
                </span>
                <span className="text-sm text-white uppercase">
                  {field.amount_of_token}
                </span>
                <span className="text-sm text-white uppercase">
                  {field.allocated}
                </span>
                <span className="text-sm text-white uppercase">
                  {field.start_date}
                </span>
                <span className="text-sm text-white uppercase">
                  {field.end_date}
                </span>
                <span className="text-sm text-white uppercase">
                  {field.weeks}
                </span>
              </div>
            ))}
          </div>
        </StagesTable>
      </div>
      <div>
        <h3 className="text-center lg-text font-bold text-[48px]">
          Presale Stages
        </h3>
        <div className="centers mt-[64px]">
          <RoadMapLarge />
        </div>
      </div>
    </div>
  );
};

export default LargePresale;
