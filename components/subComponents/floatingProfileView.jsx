import React, { useEffect, useState } from "react";
import $ from "jquery";

const FloatingProfileView = () => {
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
    <div className="absolute  t-[2rem] translate-x-[-13rem] rounded-md min-h-[18rem] min-w-[18rem] block border-2 bg-white z-[99] border-slate-200 drop-shadow-lg shadow-xl">
      <div className="flex flex-col px-10 w-[100%]">
        <div className="pt-1 w-[100%] flex flex-col items-center gap-2">
          <img
            crossOrigin="anonymous"
            className="rounded-[150%] w-[3.2rem] h-[3.2rem] mt-3 object-cover"
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
          <h3 className="font-normal">{user.gid}</h3>
          <h3 className="font-normal text-slate-500">{user.display_name}</h3>
          <h3 className="font-normal text-slate-500">{user.email}</h3>
        </div>
      </div>
      <hr className="w-[100%] mt-8" />
      <div>
        <div className="p-4 flex flex-col gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <h3>Profile</h3>
          </div>
          <div className="flex items-center gap-2 ">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingProfileView;
