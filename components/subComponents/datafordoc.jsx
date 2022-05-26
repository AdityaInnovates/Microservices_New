import React from "react";

const datafordoc = (props) => {
  // console.log(props);
  // let pop = new Array(props);
  let pop = props.data;
  return (
    <div>
      {pop.map((e) => {
        e = JSON.parse(e);
        return (
          <div key={e.header} className="mt-9 ml-10">
            <h1 id={`${props.class}`} className={`text-xl mb-1 font-medium`}>
              {e.header}
            </h1>
            <p>{e.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default datafordoc;
