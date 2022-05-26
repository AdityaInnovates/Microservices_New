import React from "react";
// import { RouteGuard } from '../components/RouteGaurd';
import Navbar from "../components/maincomponents/navbar.jsx";
import Context from "../context/accessacc";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <RouteGuard> */}
      <Context>
        <Navbar />
        <Component {...pageProps} />
      </Context>
      {/* </RouteGuard> */}
    </>
  );
}

export default MyApp;
