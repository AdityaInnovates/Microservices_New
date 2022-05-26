import React, { useState, useEffect } from "react";
import DataWithAside from "../components/mainComponents/dataWithAside";
import AsideNav from "../components/subComponents/asideNav";
import Router from "next/router";
const MainPanel = (props) => {
  const [year, setyear] = useState("All");
  const [maturity, setmaturity] = useState("All");
  const [searchFor, setsearchFor] = useState("All");
  const [searchData, setsearchData] = useState("Text Processing");
  const [searchQueryState, setsearchQueryState] = useState("");
  const fakearrdat = [
    {
      link: "https://en.wikipedia.org › wiki › Text_processing",
      title: "Text processing - Wikipedia",
      description:
        "Text processing is, unlike an algorithm, is a manually administered sequence of simpler macros that are the pattern-action expressions and filtering mechanisms.",
    },
    {
      link: "https://www.datarobot.com › blog › text-processing-wh...",
      title: "Text processing: what, why, and how - DataRobot AI Cloud",
      description:
        "The term text processing refers to the automation of analyzing electronic text. This allows machine learning models to get structured information about the ...",
    },
    {
      link: "https://www.techopedia.com › ... › Text Processing",
      title: "What is Text Processing? - Definition from Techopedia",
      description:
        "Text processing is sequential in approach instead of random access and works directly at the presentation layer and indirectly on the application layer. Unlike ...",
    },
    {
      link: "https://processing.org › reference › text_",
      title: "Text - Reference / Processing.org",
      description:
        "Draws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters.",
    },
    {
      link: "https://towardsdatascience.com › machine-learning-text-...",
      title: "Machine Learning — Text Processing | by Javaid Nabi",
      description:
        "In text processing, words of the text represent discrete, categorical features. How do we encode such data in a way which is ready to be used by the ...",
    },
    {
      link: "https://monkeylearn.com › blog › text-processing",
      title: "Text Processing: What Is It? - MonkeyLearn",
      description:
        "Text processing is the automated process of analyzing and sorting unstructured text data to gain valuable insights. Discover text processing ...",
    },
    {
      link: "http://text-processing.com",
      title: "Python NLTK Demos and Natural Language Text Processing ...",
      description:
        "Python NLTK Demos and APIs for Natural Language Processing. Sentiment analysis, part of speech tagging, phrase chunking and named entity recognition.",
    },
  ];
  const fakecodedat = [
    {
      title: "geekan / HowToLiveLonger",
      description: "程序员延寿指南 | A programmer's guide to live longer",
      lang: "",
    },
    {
      title: "calcom / cal.comr",
      description: "Scheduling infrastructure for absolutely everyone.",
      lang: "TypeScript",
    },
    {
      title: "gin-gonic / gin",
      description:
        "Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin.",
      lang: "Go",
    },
    {
      title: " KeenSecurityLab / BinAbsInspector",
      description: "BinAbsInspector: Vulnerability Scanner for Binaries",
      lang: "Java",
    },
    {
      title: "Grasscutters / Grasscutter",
      description:
        "A server software reimplementation for a certain anime game.",
      lang: "Java",
    },
    {
      title: " trustwallet / assets",
      description:
        "A comprehensive, up-to-date collection of information about several thousands (!) of crypto tokens.",
      lang: "Go",
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

  useEffect(() => {
    var searchQuery = new URL(location.href).searchParams.get("value");
    console.log(new URL(location.href).searchParams.get("value"));
    setsearchQueryState(searchQuery);
    alert(
      `We Are Unable To Search For ("${searchQuery}") Bcz We Don't Have Backend Data`
    );
    alert("insted Searching For Text Processing");
    return () => {};
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-[15rem] flex">
          <div>
            <div>
              <h3 className="font-semibold text-lg ml-[1.4rem] mt-[.3rem]">
                Year
              </h3>
              <AsideNav
                asideData={["All", 2019, 2020, 2021, 2022]}
                setdata={setyear}
                data={year}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg ml-[1.4rem] mt-[.3rem]">
                Maturity
              </h3>
              <AsideNav
                asideData={["All", "L(1-3)", "L(4-6)", "L(7-8)", "L(9-10)"]}
                setdata={setmaturity}
                data={maturity}
              />
            </div>
          </div>
          <div>
            <hr className="h-[102.4%] w-[1px] bg-black" />
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="flex ml-10">
            <input
              className="border-2 border-slate-400 rounded-md p-2 w-[80vw]"
              type="text"
              value={searchData}
              onChange={() => {
                alert("We Dont Have Backend For Now!");
              }}
              placeholder="Search Here..."
            />
          </div>
          <div className="w-full relative h-[4rem]">
            <div className="flex ml-10 text-lg text-green-800 tracking-wide gap-[1rem] mt-5 absolute">
              <div
                className="group"
                onClick={() => {
                  setsearchFor("All");
                }}
              >
                <h3 className="cursor-pointer p-2">All</h3>
                <hr
                  className={` bg-green-700 ${
                    searchFor == "All" ? "w-[100%]" : "w-[0px]"
                  } h-[2px] group-hover:w-[100%] transition-all duration-500`}
                />
              </div>
              <div
                className="group"
                onClick={() => {
                  setsearchFor("Description");
                }}
              >
                <h3 className="cursor-pointer p-2">Description</h3>
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
                <h3 className="cursor-pointer p-2">Code</h3>
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
                <h3 className="cursor-pointer p-2">People</h3>
                <hr
                  className={` bg-green-700 ${
                    searchFor == "People" ? "w-[100%]" : "w-[0px]"
                  } h-[2px] group-hover:w-[100%] transition-all duration-500`}
                />
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-black mt-3"></div>
          {searchFor === "All" ? (
            <DataWithAside data={fakearrdat} />
          ) : searchFor === "Description" ? (
            <DataWithAside data={fakearrdat} />
          ) : searchFor === "Code" ? (
            <DataWithAside code={fakecodedat} />
          ) : searchFor === "People" ? (
            <DataWithAside peoples={fakeAccountsData} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
MainPanel.getInitialProps = async (ctx) => {
  return {};
};

export default MainPanel;
