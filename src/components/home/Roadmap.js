import React from "react";
import styled from "styled-components";
import { ReactComponent as Circles } from "assets/svgs/circles.svg";
import { ReactComponent as FeatherCheck } from "assets/svgs/feather-check.svg";
import { ReactComponent as Layers } from "assets/svgs/layers.svg";

const RoadMapItemWrapper = styled.div`
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
  backdrop-filter: blur(100px);
  border: 1.5px solid #f59848;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
`;

const roadmap_data = [
  {
    name: "Phase I",
    phases: ["Market Operations", "Stablecoins", "Exchange", "Adiri DAO"],
  },
  {
    name: "Phase II",
    phases: ["Bonds", "Adiri Pro", "Bond Composability", "Press Release"],
  },
  {
    name: "Phase III",
    phases: [
      "$ADI Launch Sale",
      "Releasing Whitepaper",
      "Community Building",
      "Official Product Launch",
    ],
  },
];

const RoadMapItem = ({ name, phases }) => {
  return (
    <RoadMapItemWrapper className="p-[30px]">
      <div className="absolute right-[-150px] top-[-150px]">
        <Circles />
      </div>
      <div className="flex flex-col space-y-[27px]">
        <Layers />
        <span className="text-[22px] font-bold text-white">{name}</span>
        <ul className="!p-0 flex flex-col space-y-[19px]">
          {phases.map((phase, index) => (
            <li className="flex items-center space-x-[11.5px]" key={index}>
              <FeatherCheck />
              <span className="text-base text-white">{phase}</span>
            </li>
          ))}
        </ul>
      </div>
    </RoadMapItemWrapper>
  );
};

const Roadmap = () => {
  return (
    <div className="mt-[60px]">
      <h2 className="lg-text text-[32px] font-bold text-center mb-[38px]">
        Adirize DAO Roadmap
      </h2>
      <div className="flex flex-col space-y-[32px]">
        {roadmap_data.map((data, index) => (
          <RoadMapItem name={data.name} key={index} phases={data.phases} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
