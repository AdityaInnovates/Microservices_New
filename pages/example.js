import React from "react";
import Head from "next/head";
import router from "next/router";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Popup from "../components/popup";

export default function Example() {
  const colorsarr = ["#19c37d", "#ef4146", "#5436da", "#dd5ce5"];
  const arr = [
    {
      img: "impSvg/questionmark.svg",
      header: "Q&A",
      content: "Answer questions based on existing knowledge",
      color: "#19c37d",
    },
    {
      img: "impSvg/3dmodel.svg",
      header: "Grammar correction",
      content: "Corrects sentences into standard English.",
      color: "#ef4146",
    },
    {
      img: "impSvg/questionmark.svg",
      header: "Summarize for a 2nd grader",
      content: "Translates difficult text into simpler concepts.",
      color: "#f4ac36",
    },
    {
      img: "impSvg/pageSearch.svg",
      header: "Natural language to OpenAI API",
      content:
        "Create code to call to the OpenAI API using a natural language instruction.",
      color: "#5436da",
    },
    {
      img: "impSvg/tag.svg",
      header: "Text to command",
      content: "Translate text into programmatic commands.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "English to other languages",
      content: "Translates English text into French, Spanish and Japanese.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Natural language to Stripe API",
      content: "Create code to call the Stripe API using natural language..",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "SQL translate",
      content: "Translate natural language to SQL queries..",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Parse unstructured data",
      content: "Create tables from long form text",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Classification",
      content: "Classify items into categories via example.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Python to natural language",
      content:
        "Explain a piece of Python code in human understandable language.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Movie to Emoji",
      content: "Convert movie titles into emoji.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Calculate Time Complexity",
      content: "Find the time complexity of a function.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Translate programming languages",
      content: "Translate from one programming language to another",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Advanced tweet classifier",
      content: "Advanced sentiment detection for a piece of text.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Explain code",
      content: "Explain a complicated piece of code.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Keywords",
      content: "Extract keywords from a block of text.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Factual answering",
      content:
        "Guide the model towards factual answering by showing it how to respond to questions that...",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Ad from product description",
      content: "Turn a product description into ad copy.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Product name generator",
      content:
        "Create product names from examples words. Influenced by a community prompt.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "TL;DR summarization",
      content:
        "Summarize text by adding a 'tl;dr:' to the end of a text passage. It shows that the API unde",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Python bug fixer",
      content: "Find and fix bugs in source code.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Spreadsheet creator",
      content:
        "Create spreadsheets of various kinds of data. It's a long prompt but very versatile. Output c...",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "JavaScript helper chatbot",
      content: "Message-style bot that answers JavaScript questions",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "ML/AI language model tutor",
      content: "Bot that answers questions about language models",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Science fiction book list maker",
      content: "Create a list of items for a given topic.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Tweet classifier",
      content: "Basic sentiment detection for a piece of text.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Airport code extractor",
      content: "Extract airport codes from text.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "SQL request",
      content: "Create simple SQL queries.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Extract contact information",
      content: "Extract contact information from a block of text.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "JavaScript to Python",
      content: "Convert simple JavaScript expressions into Python.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Mood to color",
      content: "Turn a text description into a color.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Write a Python docstring",
      content:
        "An example of how to create a docstring for a given Python function. We specify the Python ve...",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Analogy maker",
      content:
        "Create analogies. Modified from a community prompt to require fewer examples.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "JavaScript one line function",
      content: "Turn a JavaScript function into a one liner.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Micro horror story creator",
      content:
        "Creates two to three sentence short horror stories from a topic input.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Third-person converter",
      content:
        "Converts first-person POV to the third-person. This is modified from a community prompt to...",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Notes to summary",
      content: "Turn meeting notes into a summary.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "VR fitness idea generator",
      content: "Create ideas for fitness and virtual reality games.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "ESRB rating",
      content: "Categorize text based upon ESRB ratings.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Essay outline",
      content: "Generate an outline for a research topic.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Recipe creator (eat at your own risk)",
      content: "Create a recipe from a list of ingredients.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Chat",
      content: "Open ended conversation with an AI assistant.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Marv the sarcastic chat bot",
      content: "Marv is a factual chatbot that is also sarcastic.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Turn by turn directions",
      content: "Convert natural language to turn-by-turn directions.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Restaurant review creator",
      content: "Turn a few words into a restaurant review.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Create study notes",
      content: "Provide a topic and get study notes.",
      color: "#dd5ce5",
    },
    {
      img: "impSvg/tag.svg",
      header: "Interview questions",
      content: "Create interview questions.",
      color: "#dd5ce5",
    },
  ];
  arr.forEach((el, index) => {
    let rand = Math.random();
    console.log(rand);
    if (rand > 1) {
      arr[index].color = colorsarr[1];
    } else if (2 < rand) {
      arr[index].color = colorsarr[3];
    } else if (3 < rand) {
      arr[index].color = colorsarr[0];
    } else if (4 < rand) {
      arr[index].color = colorsarr[2];
    }
  });
  const [objtorender, setobjtorender] = useState("");
  // let objtorender = {};
  const [showpop, setshowpop] = useState(false);
  const [datatosearch, setdatatosearch] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Examples-OpenAI API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="outercont max-w-full w-[93%] m-auto mt-[1.6rem] md:w-[50%] ">
        <div className="innerofoutercont">
          <div className="headerofcont flex items-center justify-center">
            <h3 className="font-bold text-[2rem]">Examples</h3>
          </div>
          <div className="items-center justify-center flex">
            <h3 className="text-[1.2rem] mb-[1.6rem] text-gray-600 mt-[0.8rem] ">
              Explore what&aposs possible with some example applications
            </h3>
          </div>
          <div className="mt-[0.8rem]">
            <SearchBar setdata={setdatatosearch} />
          </div>
          <div className="mt-16 mb-7 text-xl font-bold tracking-wide"></div>
          <div>
            <div className="grid  gap-10  grid-cols-2 grid-flow-row ">
              {datatosearch === ""
                ? arr.map((el) => {
                    return (
                      <div
                        key={el.content}
                        className="flex space-x-3  cursor-pointer hover:scale-[1.01] transition-all duration-200"
                        onClick={(e) => {
                          setshowpop(true);
                          setobjtorender(el.header);
                        }}
                      >
                        <div
                          style={{ backgroundColor: `${el.color}` }}
                          className="p-5 rounded-md"
                        >
                          <img
                            className="invert"
                            src={el.img}
                            alt="Unable to Load!!"
                          />
                        </div>
                        <div>
                          <h1 className="font-medium">{el.header}</h1>
                          <p className="font-[400] text-[0.7rem] text-gray-500 tracking-wide">
                            {el.content.length > 45
                              ? `${el.content.substring(0, 45)}...`
                              : el.content}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : arr.map((el) => {
                    return el.header
                      .toUpperCase()
                      .includes(datatosearch.toUpperCase()) ? (
                      <div className="flex space-x-3 cursor-pointer hover:scale-[1.01] transition-all duration-200">
                        <div
                          style={{ backgroundColor: `${el.color}` }}
                          className="p-5 rounded-md"
                        >
                          <h1>{el.header.includes(datatosearch)}</h1>
                          <img
                            className="invert"
                            src={el.img}
                            alt="Unable to Load!!"
                          />
                        </div>
                        <div>
                          <h1 className="font-medium">{el.header}</h1>
                          <p className="font-[400] text-[0.7rem] text-gray-500 tracking-wide">
                            {el.content.length > 45
                              ? `${el.content.substring(0, 45)}...`
                              : el.content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden space-x-3 cursor-pointer hover:scale-[1.01] transition-all duration-200">
                        <div
                          style={{ backgroundColor: `${el.color}` }}
                          className="p-4 rounded-md"
                        >
                          <h1>{el.header.includes(datatosearch)}</h1>
                          <img
                            className="invert"
                            src={el.img}
                            alt="Unable to Load!!"
                          />
                        </div>
                        <div>
                          <h1 className="font-medium">{el.header}</h1>
                          <p className="font-light text-sm tracking-wide">
                            {el.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      {showpop ? <Popup title={objtorender} setshow={setshowpop} /> : ""}
    </div>
  );
}
