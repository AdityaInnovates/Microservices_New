import React, { useEffect, useState } from "react";
import DataForCodeRepo from "../components/mainComponents/dataForCodeRepo";

const CodeRepo = (props) => {
  const [query, setquery] = useState({});
  useEffect(() => {
    var searchQuery = new URL(location.href).searchParams.get("searchObject");
    console.log(new URL(location.href).searchParams.get("searchObject"));
    setquery(JSON.parse(searchQuery));
    return () => {};
  }, []);
  console.log(query);
  return (
    <>
      <div>
        <div className="flex justify-between min-h-[91vh] ">
          <div>
            <DataForCodeRepo data={query} />
          </div>
          <div className="flex">
            <hr className=" h-[100%] bg-black w-[1px]" />
            <div className="p-4">
              <div className="flex gap-5 w-[15rem]">
                <h3 className="text-lg">Project Status</h3>
                <div className=" flex justify-center items-center ">
                  <h3 className="px-3 py-1 text-xs bg-green-800 text-white rounded-[1rem]">
                    Completed
                  </h3>
                </div>
              </div>
              <div className="mt-4 max-w-[18rem]">
                <h3 className="tracking-wide italic font-sans text-lg">
                  Details
                </h3>
                <h3>{query.description}</h3>
              </div>
              <div className="mt-4 max-w-[18rem]">
                <h3 className="tracking-wide italic font-sans text-lg">
                  Language
                </h3>
                <h3>
                  {query.lang === "Not Specified!" ? (
                    "Not Specified!"
                  ) : (
                    <>
                      <div className="flex gap-2 items-center">
                        <span className="bg-green-600 block w-[1rem] h-[1rem] rounded-[100%]"></span>
                        <h3>{query.lang}</h3>
                      </div>
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// export async function getServerSideProps({ query }) {
//   return {
//     props: { query },
//   };
// }
CodeRepo.getInitialProps = async (ctx) => {
  return {};
};

export default CodeRepo;
