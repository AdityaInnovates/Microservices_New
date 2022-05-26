import React from "react";
import Router from "next/router";

const DataWithAside = (props) => {
  var dataarr = props.data || props.code || props.peoples;
  return (
    <>
      <div>
        <div className="p-10 flex flex-col gap-10">
          {props.data
            ? dataarr.map((el) => {
                return (
                  <div
                    key={el.title}
                    className="group cursor-pointer w-max"
                    onClick={() => {
                      Router.push({
                        pathname: "codeRepo",
                        query: {
                          searchObject: JSON.stringify({
                            title: el.title,
                            description: el.description,
                            lang: el.lang || "Not Specified!",
                          }),
                        },
                      });
                    }}
                  >
                    <h3>{el.link}</h3>
                    <h3 className="text-blue-800 font-medium text-xl group-hover:underline">
                      {el.title}
                    </h3>
                    <h3 className="text-md max-w-[35rem]">{el.description}</h3>
                  </div>
                );
              })
            : props.code
            ? dataarr.map((el) => {
                return (
                  <div key={el.title}>
                    <div
                      className="group cursor-pointer w-max"
                      onClick={() => {
                        Router.push({
                          pathname: "codeRepo",
                          query: {
                            searchObject: JSON.stringify({
                              title: el.title,
                              description: el.description,
                              lang: el.lang || "Not Specified!",
                            }),
                          },
                        });
                      }}
                    >
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
                          {el.title}
                        </h3>
                      </div>
                      <h3 className="text-md max-w-[35rem]">
                        {el.description}
                      </h3>
                      <h3>{el.lang}</h3>
                    </div>
                    <hr className="w-full" />
                  </div>
                );
              })
            : props.peoples
            ? dataarr.map((el) => {
                return (
                  <div key={el.name}>
                    <div className="group cursor-pointer w-max">
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
            : ""}
        </div>
      </div>
    </>
  );
};

export default DataWithAside;
