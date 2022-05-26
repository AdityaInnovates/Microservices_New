import $ from "jquery";
import React, { useState } from "react";
import Switch from "react-switch";

const Sandbox = () => {
  const [toggle1, settoggle1] = useState(false);
  return (
    <>
      <div className="w-100% bg-white px-[10rem]">
        <div className="min-h-[6rem] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[2rem] pt-4">
            <div>
              <div className="flex justify-between">
                <img src="/logo.svg" width={100} alt="" />
                <div className="flex gap-4">
                  <div className="flex items-baseline gap-1 justify-center">
                    <i className="fa-regular fa-envelope"></i>
                    <h3>Contact</h3>
                  </div>
                  <div className="flex items-baseline gap-1 justify-center">
                    <i className="fa-solid fa-globe"></i>
                    <h3>India</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 mb-2">
              <div className="border-b-4 border-cyan-300">
                Products & Services
              </div>
              <div>Market-specific Solutions</div>
              <div>Company</div>
            </div>
            <div className="mr-3 z-[0]">
              <Switch onChange={settoggle1} checked={toggle1} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-[20rem] bg-slate-100">
          <div className="px-[10rem]">
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-5">
                  <div className="h-[4rem] w-[0.5rem] block bg-cyan-300"></div>
                  <h3 className="text-[3rem] font-semibold">
                    2021 Industrial Controls Download Catalog
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex gap-4">
                  <img
                    src="https://assets.new.siemens.com/siemens/assets/api/uuid:f96e8d0a-5904-4087-be7f-4d4c96ec3ecb/width:1125/quality:high/industrial-controls-catalog-with-control-and-circuit-components.png"
                    // width={600}
                    className="w-[150rem] h-[20rem] object-cover mb-14"
                    height={600}
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">
                      New Industrial Controls Catalog - September 2021
                    </h3>
                    <h3>
                      The 2021 Industrial Controls Catalog is available as a
                      single interactive PDF file. It includes the latest,
                      best-in-class Control Products from our SIRIUS Control,
                      SIRIUS Hybrid, SIRIUS Monitor, SIRIUS Command and General
                      Purpose families. This is an extremely interactive catalog
                      with page links, bookmarks, and search engine. Download it
                      today to see just how quickly you can select products and
                      retrieve information.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[10rem]">
        <div>
          <div>
            <h3 className="text-xl font-semibold mt-12">
              Use the separate sections below for faster opening times when
              viewing online. If there is a date in parentheses, the section has
              updates not included in the complete catalog above.
            </h3>
          </div>
        </div>
        <div>
          <div
            className="mt-[1rem] w-[13rem]"
            onClick={(e) => {
              $(e.currentTarget.lastChild).toggleClass("flex");
              $(e.currentTarget.lastChild).toggleClass("hidden");
              $(e.currentTarget.firstChild.lastChild.firstChild).toggleClass(
                "rotate-180"
              );
              // e.currentTarget.lastChild.classList.remove("hidden");
            }}
          >
            <div className=" p-3 flex bg-slate-100 flex-col gap-3 w-[13rem] h-[8rem] cursor-pointer">
              <h3 className="font-semibold text-lg">Section 0 (01-2022)</h3>
              <p>Table of Contents & Catalog Overview</p>
              <div className="flex justify-end pr-2 items-start">
                <i className="fa-solid fa-angle-down "></i>
              </div>
            </div>
            <div className="w-[80vw] hidden px-4 pb-4 pt-6  flex-col gap-6 bg-slate-100">
              <h3 className="font-semibold text-2xl">
                Table of Contents & Catalog Overview
              </h3>
              <p>
                Section 0 as an interactive PDF (0/1 - 0/8) - includes the
                catalog Table of Contents, an explanation of Catalog Navigation
                and a Product Overview by section.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 px-[10rem] mt-[3rem]">
        <div>
          <div className="flex justify-start gap-[15rem]">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-semibold text-xl mt-[3rem]">
                Products & Services
              </h3>
              <div className="flex flex-col gap-3">
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Building Technologies</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Drive Technology</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Energy</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Financing</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Healthineers</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Automation</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Mobility</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Services</h3>
                </div>
                <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                  <i className="fa-solid fa-angle-right flex"></i>
                  <h3 className="pl-2">Software</h3>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-3 ">
                <h3 className="font-semibold text-xl mt-[3rem]">Company</h3>
                <div className="flex flex-col gap-3">
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Building for a changing tomorrow</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Newsroom</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Jobs & Careers</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">About us</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">
                      Environmental, Social and Governance (ESG)
                    </h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Innovation</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Investor Relations</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Siemens in the USA</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Topic Areas</h3>
                  </div>
                  <div className="cursor-pointer flex items-baseline gap-2 pl-1">
                    <i className="fa-solid fa-angle-right flex"></i>
                    <h3 className="pl-2">Sales & Distributor locator</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3 ">
                <h3 className="font-semibold text-xl mt-[3rem]">Contact Us</h3>
                <div className="flex flex-col gap-3">
                  <div className="cursor-pointer flex items-baseline gap-2 justify-center">
                    <i className="fa-regular fa-envelope"></i>
                    <h3>Contact Us</h3>
                  </div>
                </div>
                <h3 className="font-semibold text-xl mt-[3rem]">Follow Us</h3>
                <div className="flex flex-col gap-3">
                  <div className="cursor-pointer flex items-baseline gap-3 ">
                    <i className="fa-brands fa-twitter"></i>
                    <h3 className="font-semibold ">in</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-[2.5rem] pb-[1.8rem]">
            <h3 className="cursor-pointer">Siemens USA</h3>
            <h3 className="cursor-pointer">© Siemens 1996 - 2022</h3>
            <h3 className="cursor-pointer">Corporate Information</h3>
            <h3 className="cursor-pointer">Privacy Notice</h3>
            <h3 className="cursor-pointer">Cookie Notice</h3>
            <h3 className="cursor-pointer">Terms of Use</h3>
            <h3 className="cursor-pointer">Digital ID</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
