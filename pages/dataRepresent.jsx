/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import Script from "next/script";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DataRepresent = () => {
  var relatedtopics = [
    "Showroom",
    "Three-Wheeler",
    "Subsidy",
    "Electric Motorcycles And Scooters",
    "Volt",
  ];
  var fakeAccountsData = [
    {
      img: "https://camo.githubusercontent.com/8cc703dce7122825e2752501246d77dbd71d8337d22c0adb9b48e72c77cf8e07/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f66316533616232313461393736613339636664373133626339336465623130663f733d333026643d68747470733a2f2f613234382e652e616b616d61692e6e65742f6173736574732e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e67",
      name: "visionmedia (TJ Holowaychuk)",
      location: "Victoria, BC, Canada",
    },
    {
      img: "https://camo.githubusercontent.com/b23c376ac29f3b0a0b5d334bf92283a5913ce52a53a15a89f4801509e095fd7a/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f37343930623465336539636238356131663764633063386561303161383665353f733d333026643d68747470733a2f2f613234382e652e616b616d61692e6e65742f6173736574732e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e67",
      name: "c9s (Yo-An Lin)",
      location: "Taipei, Taiwan",
    },
    {
      img: "https://camo.githubusercontent.com/056d2b8f4cfd9d0a348da6f200a28c8c9899f46f67fc40c97cbe901df652e585/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f66316132633539303565313231643039666562613561643733383938666663613f733d333026643d68747470733a2f2f613234382e652e616b616d61692e6e65742f6173736574732e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e67",
      name: "fabpot (Fabien Potencier)",
      location: "Paris, France",
    },
    {
      img: "https://camo.githubusercontent.com/0ea0d2a9b3298ee3f83376ab06d8084514e011096ed091461cba02cf69548519/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f62646137363861303432626430333466336638303930343031616137373933353f733d333026643d68747470733a2f2f613234382e652e616b616d61692e6e65742f6173736574732e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e67",
      name: "weierophinney (Matthew Weier O'Phinney)",
      location: "Sioux Falls, SD, USA",
    },
    {
      img: "https://camo.githubusercontent.com/7a131e6a3b5e9e0fd86d6f0a557c7e9932d60694985b00b19f3acb060077dd23/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f65646430626536633763303335623538626232373132323834646134316631663f733d333026643d68747470733a2f2f613234382e652e616b616d61692e6e65742f6173736574732e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e67",
      name: "springmeyer (Dane Springmeyer)",
      location: "Seattle",
    },
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dataSetData = [
    {
      label: "Projects(2022)",
      data: [33, 95, 32, 55, 85, 79, 44, 62, 59, 44, 58, 83],
      backgroundColor: [
        "#00FF00",
        "#00FF00",
        "#000",
        "#00FF00",
        "#000",
        "#00FF00",
        "#000",
        "#00FF00",
        "#000",
        "#00FF00",
        "#000",
        "#00FF00",
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-[1rem]">
        <h3 className="font-[ui-sans] italic mr-[1rem] text-3xl">Technology</h3>
        <select
          className=" border-2 border-b-gray-200 w-[9rem]"
          name="dataToDisplay"
          id=""
        >
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
          <option value="E-Vehicle">E-Vehicle</option>
        </select>
      </div>
      <div className="flex mt-[2rem]">
        <div className="w-[50rem] h-[10rem] ml-[3rem] ">
          <Line
            data={{
              labels: months,
              datasets: dataSetData,
            }}
            options={{ maintainAspectRatio: true }}
          ></Line>
        </div>
        <div>
          <div className="ml-[4rem] mt-[1rem] bg-slate-100 p-2 min-w-[35rem]">
            <div className="shadow-lg bg-white p-4">
              <div>
                <h3 className="mb-1">Related Projects</h3>
                <hr className="w-[106%] translate-x-[-15px]" />
              </div>
              {relatedtopics.map((el, ind) => {
                return (
                  <div>
                    <div className="flex gap-[1rem] p-2 hover:bg-slate-100 cursor-pointer">
                      <h3 className="font-normal ml-2">{ind + 1}</h3>
                      <h3>{el} -Topic</h3>
                    </div>
                    <hr className="w-[100%]" />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="bg-slate-100 p-3 mt-[3rem] ml-[6rem] w-[23rem]">
              <div className="bg-white p-2 flex flex-col gap-[6px]">
                {fakeAccountsData.map((el) => {
                  return (
                    <div>
                      <div className="flex items-center ml-1rem gap-[10px] hover:bg-slate-100 cursor-pointer p-2">
                        <img
                          className="rounded-[100%] min-w-[2.5rem]"
                          src={el.img}
                          alt=""
                        />
                        <div>
                          <h3 className="font-bold">{el.name}</h3>
                          <h3>{el.location}</h3>
                        </div>
                      </div>
                      <hr className="w-[100%] mt-[6px]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataRepresent;
