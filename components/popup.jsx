import React, { useEffect, useDispatch } from "react";

const Popup = (props) => {
  const { title } = props;
  useEffect(() => {
    const newel = document.createElement("div");
    newel.id = "overlay";
    newel.style.opacity = "0.7";
    newel.style.backgroundColor = "#000";
    newel.style.zIndex = "1";
    newel.style.position = "absolute";
    newel.style.height = "150%";
    newel.style.width = "100%";
    newel.style.top = "0";
    newel.addEventListener("click", () => {
      document.body.style.heigth = "auto";
      document.body.style.overflow = "auto";
      if (document.getElementById("overlay")) {
        document.body.removeChild(document.getElementById("overlay"));
      }
      props.setshow(false);
    });
    document.body.append(newel);
    document.body.style.heigth = "100%";
    document.body.style.overflow = "hidden";
  });
  let obj = {
    img: "",
    imgcolor: "",
    desc: "",
    prompt: "",
    res: "",
  };
  if (title === "Q&A") {
    obj.img = "impSvg/questionmark.svg";
    obj.imgcolor = "#19c37d";
    obj.desc = "Answer questions based on existing knowledge.";
    obj.prompt = `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".

    Q: What is human life expectancy in the United States?
    A: Human life expectancy in the United States is 78 years.
    
    Q: Who was president of the United States in 1955?
    A: Dwight D. Eisenhower was president of the United States in 1955.
    
    Q: Which party did he belong to?
    A: He belonged to the Republican Party.
    
    Q: What is the square root of banana?
    A: Unknown
    
    Q: How does a telescope work?
    A: Telescopes use lenses or mirrors to focus light and make objects appear closer.
    
    Q: Where were the 1992 Olympics held?
    A: The 1992 Olympics were held in Barcelona, Spain.
    
    Q: How many squigs are in a bonk?
    A: Unknown
    
    Q: Where is the Valley of Kings?
    A:`;
    obj.res = "The Valley of Kings is located in Luxor, Egypt.";
  } else if (title === "Grammar correction") {
    obj.img = "impSvg/scolarHat.svg";
    obj.imgcolor = "#19c37d";
    obj.desc = "Corrects sentences into standard English.";
    obj.prompt = `Correct this to standard English:

    She no went to the market.`;
    obj.res = "She didn't go to the market.";
  }
  console.log(obj);
  return (
    <>
      <div className="" id="mainpopup">
        <div
          id="nodeofmainpop"
          className="absolute w-[56%]  rounded-md bg-[#fff] border-2 border-red-400 top-[55%] left-[50%] z-10"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="p-10 ">
            <div>
              <div className="flex gap-4 pb-4">
                <div
                  style={{ backgroundColor: `${obj.imgcolor}` }}
                  className="p-5 rounded-md"
                >
                  <img
                    className="invert"
                    src={obj.img}
                    alt="Unable to Load!!"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg tracking-wide">{title}</h1>
                </div>
              </div>
              <hr />
              <div className="pt-6">
                <h1>{obj.desc}</h1>
              </div>
              <div>
                <div className="mt-6 mb-3">
                  <h1 className="font-medium">Prompt</h1>
                </div>
                <div className="rounded-md bg-[#f7f7f8] p-3">
                  <p>{obj.prompt}</p>
                </div>
              </div>
              <div>
                <div className="mt-6 mb-3">
                  <h1 className="font-medium">Sample response</h1>
                </div>
                <div className="rounded-md bg-[#ebfaeb] p-3">
                  <p>{obj.res}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
