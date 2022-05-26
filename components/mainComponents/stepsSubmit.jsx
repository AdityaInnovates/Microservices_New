import React, { useEffect, useContext } from "react";
import { User } from "../../context/allcontexts";
import FloatingButton from "./floatingButton";

const IndexPage = () => {
  const { canGoBack, setcanGoBack } = useContext(User);
  useEffect(() => {
    setcanGoBack(true);
    document.body.style.backgroundColor = "";

    return () => {
      setcanGoBack(false);
      document.body.style.backgroundColor = "#fff";
    };
  }, []);

  return (
    <div className="h-[91.5vh] flex flex-col items-start text-gray-900 antialiased relative">
      <FloatingButton />
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "50vh",
        }}
        className="absolute  inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-8 text-center">
        <h1 className="text-white text-5xl font-semibold">
          <span className="text-cyan-500">Intern Work Search </span>
        </h1>
        <p className="text-black-200 mt-2">Submit your project here !!</p>
      </div>
      <div className=" px-[10rem] pointer-events-none w-full mt-5 mb-[2rem] rounded-lg shadow-2xl  overflow-hidden z-10">
        <div className="px-5 md:px-16 h-[40vh]  pointer-events-auto md:h-[68vh] w-full rounded-2xl bg-green-200">
          <form
            className="h-[auto]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col">
              <div className="flex w-full justify-evenly">
                <div className="w-[25rem]">
                  <h2 className="font-semibold text-xl my-5">
                    Personal Information
                  </h2>
                  <label htmlFor="Contributor's name"></label>
                  <input
                    type="text"
                    id="Contributor's Name"
                    name="Contributor's Name"
                    className="inputProjdata0 text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                    placeholder="Contributor's Name"
                  />
                </div>
                <div className="w-[25rem]">
                  <h2 className="font-semibold text-xl my-5">Mentor Details</h2>
                  <label htmlFor="Mentor"></label>
                  <input
                    type="text"
                    id="Mentor"
                    name="Mentor"
                    className="inputProjdata1 text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                    placeholder="Mentor"
                  />
                </div>
              </div>
              <div className="flex w-full justify-evenly">
                <div className="w-[25rem]">
                  <h2 className="font-semibold text-xl my-5">
                    Project Details
                  </h2>
                  <label htmlFor="Project Name"></label>
                  <input
                    type="text"
                    id="Project Name"
                    name="Project Name"
                    className="inputProjdata2 text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                    placeholder="Project Name"
                  />
                </div>
                <div className="w-[25rem]">
                  <h2 className="font-semibold text-xl my-5">Description</h2>
                  <label htmlFor="Description"></label>
                  <input
                    type="text"
                    id="Description"
                    name="Short Description"
                    className="inputProjdata3 text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                    placeholder="Short Description"
                  />
                </div>
              </div>
              <div className="flex w-full ml-[6rem]">
                <div className="w-[25rem]">
                  <h2 className="font-semibold text-xl my-5">Tags</h2>
                  <label htmlFor="Keywords"></label>
                  <input
                    type="text"
                    id="keywords"
                    name="Tags/Keywords"
                    className="inputProjdata4 text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                    placeholder="Tags/Keywords"
                  />
                </div>
              </div>
              <div className="ml-[6rem] mr-[6rem]">
                <button
                  type="button"
                  className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
