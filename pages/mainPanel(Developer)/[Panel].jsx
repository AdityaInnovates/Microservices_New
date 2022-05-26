import React, { useState } from "react";
import AsideNav from "../../components/subComponents/asideNav";

const MainPanel = () => {
  const [year, setyear] = useState("");
  const [maturity, setmaturity] = useState("");
  return (
    <>
      <div className="flex">
        <div className="w-[15rem] flex">
          <div>
            <div>
              <h3 className="font-bold text-lg ml-[1.4rem] mt-[.3rem]">Year</h3>
              <AsideNav
                asideData={["All", 2019, 2020, 2021, 2022]}
                setdata={setyear}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg ml-[1.4rem] mt-[.3rem]">
                Maturity
              </h3>
              <AsideNav
                asideData={["All", "L(1-3)", "L(4-6)", "L(7-8)", "L(9-10)"]}
                setdata={setmaturity}
              />
            </div>
          </div>
          <div>
            <hr className="h-[102.4%] w-[1px] bg-black" />
          </div>
        </div>
        <div>
          <div>
            <h3>{year}</h3>
            <h3>{maturity}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
