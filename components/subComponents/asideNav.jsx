import React from "react";
import Router from "next/router";
import { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";

const AsideNav = (props) => {
  let Arrofdat = props.asideData || [
    "Account",
    "Addresses",
    "How To Sell?",
    "Debit/Credit Cards",
    "SignOut",
  ];

  return (
    <>
      <div className="">
        <div className="bg-white m-[.5rem] rounded-sm shadow-md ">
          <ul
            className={` flex flex-col space-y-2 pl-[.5rem] pb-[1rem] min-w-[5rem] md:min-w-[13rem] min-h-[17rem] max-h-[87vh] pr-[4rem] pt-[1rem] overflow-x-hidden overflow-y-auto `}
          >
            {Arrofdat.map((el) => {
              return (
                <li
                  key={el}
                  className={`${
                    props.data === el ? "bg-[#e5e7eb]" : ""
                  } asideitem hover:bg-cyan-300 pl-[.5rem] w-[130%] rounded-sm cursor-pointer mb-1 pt-1`}
                  onClick={(e) => {
                    props.setdata(e.currentTarget.firstChild.textContent);
                    $(e.currentTarget)
                      .parent()
                      .children()
                      .each((ind, el) => {
                        el.removeAttribute("style");
                      });
                    $(e.currentTarget)
                      .parent()
                      .children()
                      .each((ind, el) => {
                        el.firstChild.firstChild.checked = false;
                      });
                    e.currentTarget.firstChild.firstChild.checked = true;
                    e.currentTarget.style.backgroundColor = "#e5e7eb";
                  }}
                >
                  <div className="flex items-baseline gap-2">
                    <input type="checkbox" />
                    <h3 className="mb-1.5 mt-1 cursor-pointer">{el}</h3>
                  </div>
                  <hr className="w-[100%]" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default AsideNav;
