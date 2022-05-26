import React from "react";
import $ from "jquery";
import Datafordoc from "./subComponents/datafordoc";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const Sidebar = (props) => {
  const [datafordisplay, setdatafordisplay] = useState([]);
  function applydata(e) {
    $.ajax({
      type: "post",
      url: `/api/fectdatafordoc/${e.currentTarget.innerText}`,
      success: (data) => {
        fixbugforjson(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  let classtosend = "Introduction";
  function fixbugforjson(data) {
    setdatafordisplay([]);
    let arr = new Array();
    let data1 = data.substring(1, data.length - 1).split("},");
    data1.forEach((e, index) => {
      if (index !== data1.length - 1) {
        data1[index] = data1[index] + "}";
        arr.push(data1[index]);
      } else {
        setdatafordisplay(arr);
      }
    });
  }
  // console.log(datafordisplay);
  useEffect(() => {
    $.ajax({
      type: "post",
      url: `/api/fectdatafordoc/${props.load}`,
      success: (data) => {
        fixbugforjson(data);
        // setdatafordisplay(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }, [$]);

  return (
    <>
      <div className="flex flex-row space-x-40 ">
        <div className="mt-3 ml-8 fixed">
          <h1 className="font-medium">GET STARTED</h1>
          <ul className="space-y-4 mt-2">
            <li
              className="itemsofsidebar cursor-pointer hover:text-sky-500"
              // onClick={(e) => {
              // classtosend = e.currentTarget.innerText;
              // $.ajax({
              //   type: "post",
              //   url: `/api/fectdatafordoc/${e.currentTarget.innerText}`,
              //   success: (data) => {
              //     fixbugforjson(data);
              //   },
              //   error: (err) => {
              //     console.log(err);
              //   },
              // });
              // }}
              onClick={(e) => {
                Router.replace(`${e.currentTarget.innerText}`);
                applydata(e);
              }}
            >
              Introduction
            </li>
            <li
              className={`itemsofsidebar cursor-pointer hover:text-sky-500 ${"pl-3"}`}
              onClick={(e) => {
                if ($(`h1:contains('${e.currentTarget.innerText}')`)[0]) {
                  $(
                    `h1:contains('${e.currentTarget.innerText}')`
                  )[0].scrollIntoView();
                }
              }}
            >
              Overview
            </li>
            <li
              className={`itemsofsidebar cursor-pointer hover:text-sky-500 ${"pl-3"}`}
              onClick={(e) => {
                if ($(`h1:contains('${e.currentTarget.innerText}')`)[0]) {
                  console.log($(`h1:contains('${e.currentTarget.innerText}')`));
                  $(
                    `h1:contains('${e.currentTarget.innerText}')`
                  )[0].scrollIntoView();
                }
              }}
            >
              Key concepts
            </li>
            <li
              className="itemsofsidebar cursor-pointer hover:text-sky-500"
              onClick={(e) => {
                Router.replace(`${e.currentTarget.innerText}`);
                applydata(e);
              }}
            >
              Quickstart tutorial
            </li>
            <li
              className="itemsofsidebar cursor-pointer hover:text-sky-500"
              onClick={(e) => {
                Router.replace(`${e.currentTarget.innerText}`);
                applydata(e);
              }}
            >
              Libraries
            </li>
            <li
              className="itemsofsidebar cursor-pointer hover:text-sky-500"
              onClick={(e) => {
                Router.replace(`${e.currentTarget.innerText}`);
                applydata(e);
              }}
            >
              Engines
            </li>
            <li
              className="itemsofsidebar cursor-pointer hover:text-sky-500"
              onClick={(e) => {
                Router.replace(`${e.currentTarget.innerText}`);
                applydata(e);
              }}
            >
              Usage guidelines
            </li>
          </ul>
        </div>
        <div className=" max-w-[50%]">
          {datafordisplay !== "" ? (
            <Datafordoc data={datafordisplay} class={classtosend} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
