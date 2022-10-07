import React from "react";
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

const Presale = () => {
  return (
    <div>
      <h2 className="my-[32px] text-[32px] font-bold lg-text text-center">
        Presale
      </h2>
      <div className="rounded-[4px] p-2 flex items-center justify-between border-[1px] border-[#F59848]">
        <button className="lg-btn !px-4 !py-2 !rounded-[4px] text-sm text-white">
          STAGE 1
        </button>
        <button className="lg-btn !px-4 !py-2 !rounded-[4px] text-sm text-white inactive-lg-btn">
          STAGE 2
        </button>
        <button className="lg-btn !px-4 !py-2 !rounded-[4px] text-sm text-white inactive-lg-btn">
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
            100,000,000
          </span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            % aLLOCATED
          </span>
          <span className="text-base font-bold lg-text text-center">18</span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            start date
          </span>
          <span className="text-base font-bold lg-text text-center">
            1 AUGUST
          </span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-bold uppercase text-white">
            end date
          </span>
          <span className="text-base font-bold lg-text text-center">
            29 AUGUST
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase text-white">weeks</span>
          <span className="text-base font-bold lg-text text-center">4</span>
        </div>
      </Table>
    </div>
  );
};

export default Presale;
