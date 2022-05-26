import React, { useState } from "react";

const DataForCodeRepo = (props) => {
  const [searchFor, setsearchFor] = useState("Description");
  const fakedata = [
    {
      title: "Disclamer:",
      desc: "This post is just a reflection of solving digitalization problem and starting line for such initivative. I have tried to ink the efforts and activities that took place in the developement of a Document Intelligance Systern. Most of the story told below has been replaced by many cool stuff and hacks while productizing the solution. Copyright issues and Funny Fear have stopped me including it into the post. :)",
    },
    {
      title: "Why This Post?",
      desc: "Character Recognition is one of the unsolved problems present till date. Claims to solve it has been done in past but not to an extend that we can say ohh! my God, now no more resreach on it. I also have tried to solve this problem and partially achieved it. Looknig at the future of this problem statement, I'm sure that many more brillinat minds are yet to come, take this problem and get more close to say it done. In order to do so I strongly feel thats it's better to start from a point where people have left so that we can invest our energy in going ahead instead of reinventing the wheel.",
    },
    {
      title: "Sounds Great, How Does It Started?",
      desc: "When I was working on a product Intelligent Automation Platform (IAP), we have a use case where clients need to extract information from thr documents. The usecase was huge as it converges to digitalization of all paper documents at a higher level. So in process of converting documents to searchable texts we developed Optical Character Recognition (OCR) system. The OCR would take the document and extract information from it.",
    },
    {
      title: "How Was The Journey?",
      desc: "The first problem with this usecase was the document quality. The document's qyality ranges for one end where we, as humans can't read it to the other end whrere we have [fileName).docx converted to pdf. We tried different algorithms to understand at what extend we can clean the images, before we go deep to identify/predict the insiders.",
    },
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
  return (
    <>
      <div>
        <div className="pl-11 pt-8">
          <div>
            <div className="flex gap-10">
              <div>
                <h3 className="text-3xl font-semibold tracking-wide">
                  {props.data.title}
                </h3>
                <div className="flex gap-4 items-center mt-7">
                  <h3>Tags:</h3>
                  <h3 className="px-3 text-xs  hover:bg-blue-500 hover:text-white cursor-pointer text-blue-500 border-blue-500 border-2 rounded-[10rem]">
                    OCR
                  </h3>
                  <h3 className="px-3 text-xs hover:bg-blue-500 hover:text-white cursor-pointer  text-blue-500 border-blue-500 border-2 rounded-[10rem]">
                    Digitalization
                  </h3>
                  <h3 className="px-3 text-xs hover:bg-blue-500 hover:text-white cursor-pointer  text-blue-500 border-blue-500 border-2 rounded-[10rem]">
                    Cnn
                  </h3>
                  <h3 className="px-3 text-xs hover:bg-blue-500 hover:text-white cursor-pointer  text-blue-500 border-blue-500 border-2 rounded-[10rem]">
                    Image Processing
                  </h3>
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  className="group"
                  onClick={() => {
                    setsearchFor("Description");
                  }}
                >
                  <h3 className="text-lg cursor-pointer p-2">Description</h3>
                  <hr
                    className={` bg-green-700 ${
                      searchFor == "Description" ? "w-[100%]" : "w-[0px]"
                    } h-[2px] group-hover:w-[100%] transition-all duration-500`}
                  />
                </div>
                <div
                  className="group"
                  onClick={() => {
                    setsearchFor("Code");
                  }}
                >
                  <h3 className="text-lg cursor-pointer p-2">Code</h3>
                  <hr
                    className={` bg-green-700 ${
                      searchFor == "Code" ? "w-[100%]" : "w-[0px]"
                    } h-[2px] group-hover:w-[100%] transition-all duration-500`}
                  />
                </div>
                <div
                  className="group"
                  onClick={() => {
                    setsearchFor("People");
                  }}
                >
                  <h3 className="text-lg cursor-pointer p-2">People</h3>
                  <hr
                    className={` bg-green-700 ${
                      searchFor == "People" ? "w-[100%]" : "w-[0px]"
                    } h-[2px] group-hover:w-[100%] transition-all duration-500`}
                  />
                </div>
              </div>
            </div>
            {searchFor === "Description" ? (
              fakedata.map((el) => {
                return (
                  <div key={el.title} className="max-w-[50rem] mt-5 mb-4">
                    <h3 className="font-semibold text-xl tracking-wide">
                      {el.title}
                    </h3>
                    <h3>{el.desc}</h3>
                  </div>
                );
              })
            ) : searchFor === "Code" ? (
              <div key={props.data.title}>
                <div className="group cursor-pointer w-max mt-10">
                  <div className="flex align-baseline items-baseline">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                      ></path>
                    </svg>
                    <h3 className="text-blue-800 font-medium text-xl group-hover:underline">
                      {props.data.title}
                    </h3>
                  </div>
                  <h3 className="text-md max-w-[35rem]">
                    {props.data.description}
                  </h3>
                  <h3>{props.data.lang}</h3>
                </div>
                <hr className="w-full" />
              </div>
            ) : searchFor === "People" ? (
              fakeAccountsData.map((el) => {
                return (
                  <div key={el.name}>
                    <div className="group cursor-pointer w-max mt-5">
                      <div>
                        <div className="flex">
                          <img
                            className="rounded-[100%] w-[3rem]"
                            src={el.img}
                            alt=""
                          />
                          <h3 className="ml-[1.2rem] text-blue-800 font-medium text-xl group-hover:underline">
                            {el.name}
                          </h3>
                        </div>
                        <div className="ml-[4.3rem]">
                          <h3 className="text-md max-w-[35rem]">
                            {el.location}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr className="w-full" />
                  </div>
                );
              })
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataForCodeRepo;
