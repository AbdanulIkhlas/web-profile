import React from "react";
import BlurBackground from "../elements/BlurBackground";
import StatsDetail from "../elements/StatsDetail";

const Stats = ({classname}) => {
  return (
    <div className={`w-full ${classname}`} >
      <BlurBackground>
        <div className="flex items-center justify-between md:justify-evenly h-full w-full">
          <StatsDetail
            statsNumber="6"
            statsDescription="Projects Completed"
          />
          <StatsDetail
            statsNumber="1+"
            statsDescription="Successful Years"
          />
          <StatsDetail
            statsNumber="97+"
            statsDescription="Client Satisfaction"
          />
        </div>
      </BlurBackground>
    </div>
  );
};

export default Stats;
