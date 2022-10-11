import React, { useState } from "react";
import clsx from "classnames";
import { ReactComponent as Pillar } from "assets/svgs/pillar.svg";
import styled from "styled-components";

const Table = styled.div`
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.2) -27.23%,
    rgba(189, 81, 3, 0.2) 67.08%,
    rgba(87, 62, 42, 0.2) 130.21%,
    rgba(31, 31, 31, 0.2) 155.87%
  );
  padding: 8px;
  border: 2px solid #f59848;
`;

const STAGES = {
  STAGE_ONE: "STAGE_ONE",
  STAGE_TWO: "STAGE_TWO",
  STAGE_THREE: "STAGE_THREE",
};

const data = {
  [STAGES.STAGE_ONE]: {
    amount: "180.000.000",
    allocated: "18",
    start_date: "1 August",
    end_date: "29 August",
    weeks: 4,
  },
  [STAGES.STAGE_TWO]: {
    amount: "75.000.000",
    allocated: "7.5",
    start_date: "29 August",
    end_date: "2 November",
    weeks: 9.285714286,
  },
  [STAGES.STAGE_THREE]: {
    amount: "45.000.000",
    allocated: "4.5",
    start_date: "2 November",
    end_date: "16 January",
    weeks: 10.71428571,
  },
};

const Presale = () => {
  const [currentStage, setCurrentStage] = useState(STAGES.STAGE_ONE);
  const isActive = (stage) => currentStage === stage;
  console.log(currentStage);
  return (
    <div>
      <h2 className="my-[32px] text-[32px] font-bold lg-text text-center">
        Presale
      </h2>
      <div className="rounded-[4px] p-2 flex items-center justify-between border-[1px] border-[#F59848]">
        <button
          className={clsx(
            "!px-4 !py-2 !rounded-[4px] text-sm text-white",
            { "lg-btn": isActive(STAGES.STAGE_ONE) },
            { "inactive-lg-btn": !isActive(STAGES.STAGE_ONE) }
          )}
          onClick={() => setCurrentStage(STAGES.STAGE_ONE)}
        >
          STAGE 1
        </button>
        <button
          className={clsx(
            "!px-4 !py-2 !rounded-[4px] text-sm text-white",
            { "lg-btn": isActive(STAGES.STAGE_TWO) },
            { "inactive-lg-btn": !isActive(STAGES.STAGE_TWO) }
          )}
          onClick={() => setCurrentStage(STAGES.STAGE_TWO)}
        >
          STAGE 2
        </button>
        <button
          className={clsx(
            "!px-4 !py-2 !rounded-[4px] text-sm text-white",
            { "lg-btn": isActive(STAGES.STAGE_THREE) },
            { "inactive-lg-btn": !isActive(STAGES.STAGE_THREE) }
          )}
          onClick={() => setCurrentStage(STAGES.STAGE_THREE)}
        >
          STAGE 3
        </button>
      </div>
      <div className="h-[40px] w-full relative">
        <Pillar className="absolute left-[25%]" />
        <Pillar className="absolute left-[75%]" />
      </div>
      <Table className="w-full">
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            aMOUNT OF TOKEN
          </span>
          <span className="text-base font-bold lg-text text-center">
            {data[currentStage].amount}
          </span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            % aLLOCATED
          </span>
          <span className="text-base font-bold lg-text text-center">
            {data[currentStage].allocated}
          </span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            start date
          </span>
          <span className="text-base font-bold lg-text text-center">
            {data[currentStage].start_date}
          </span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            end date
          </span>
          <span className="text-base font-bold lg-text text-center">
            {data[currentStage].end_date}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase text-white">weeks</span>
          <span className="text-base font-bold lg-text text-center">
            {data[currentStage].weeks}
          </span>
        </div>
      </Table>
    </div>
  );
};

export default Presale;
