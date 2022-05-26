/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FloatingProfileView from "../subComponents/floatingProfileView";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [floatProfile, SetfloatProfile] = useState(false);
  const [user, setuser] = useState("");
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    setuser(JSON.parse(jsonPayload));
    return JSON.parse(jsonPayload);
  }
  // console.log(
  //   user.display_name
  //     ? `https://avatars.dicebear.com/api/initials/${user.display_name
  //         .replaceAll(" ", "")
  //         .replaceAll(",", " ")}.svg`
  //     : ""
  // );
  useEffect(() => {
    parseJwt(localStorage.getItem("access_token"));
  }, []);
  return (
    <>
      <div className="">
        <div className="w-[100%] h-[3.8rem] drop-shadow-sm">
          <div>
            <div className=" w-[100%] h-[3.8rem] fixed bg-white">
              <div className="h-[3.8rem] flex justify-between items-center p-auto max-w-[98vw]">
                <div className="flex gap-7 items-center">
                  <Link href={"/"}>
                    <img
                      crossOrigin="anonymous"
                      src="/logo.svg"
                      className="cursor-pointer  w-[10rem] h-[2rem] ml-[.8rem] "
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Overview
                    </h3>
                  </Link>
                  <Link href={"/"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Microservices
                    </h3>
                  </Link>
                  <Link href={"/"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Projects
                    </h3>
                  </Link>
                  <Link href={"/"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Sandbox
                    </h3>
                  </Link>
                  <Link href={"/"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Datasets
                    </h3>
                  </Link>
                </div>
                <div>
                  <img
                    onClick={() => {
                      SetfloatProfile((x) => {
                        if (x === true) {
                          return false;
                        } else {
                          return true;
                        }
                      });
                    }}
                    crossOrigin="anonymous"
                    className="rounded-[150%] w-[3.2rem] h-[3.2rem] m-4 object-cover cursor-pointer"
                    // src="https://lh3.googleusercontent.com/a-/AOh14GgAs3VSQWiMzSugfiVHWi8B5khTr5eGMrxM0pfQ=s360-p-rw-no"
                    src={
                      user.display_name
                        ? `https://avatars.dicebear.com/api/initials/${user.display_name
                            .replaceAll(" ", "")
                            .replaceAll(",", " ")
                            .replaceAll("(", " ")}.svg`
                        : ""
                    }
                    alt=""
                  />
                  <div className="component z-2">
                    {floatProfile ? <FloatingProfileView /> : ""}
                  </div>
                </div>
              </div>
              <div className=" bg-black">
                <hr className="h-[1.19px]  bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
