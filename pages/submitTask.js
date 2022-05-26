import React from "react";
import FloatingButton from "../components/mainComponents/floatingButton";
import IndexPage from "../components/mainComponents/stepsSubmit";
import { useContext } from "react";
import { User } from "../context/allcontexts";

const submitTask = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { canGoBack, setcanGoBack } = useContext(User);
  setcanGoBack(true);
  return (
    <>
      <div className="h-80vh">
        <IndexPage />
      </div>
    </>
  );
};

export default submitTask;
