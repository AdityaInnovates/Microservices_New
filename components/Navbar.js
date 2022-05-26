import { useState } from "react";
import Link from "next/link";

function NavLink({ to, children }) {
  return (
    <a href={to} className={mx-4}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Overview
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/docs"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Documentation
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/example"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Examples
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="block h-[5rem]"></div>
      <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center z-50 pt-0 fixed w-full mt-0 top-0 pb-0">
        <MobileNav open={open} setOpen={setOpen} />
        <div className=" flex items-left"></div>
        <img src="/favicon.ico" alt="" width={35} height={35} />
        <div className="w-[100%] flex md:justify-start items-center justify-end">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex space-x-3 ml-3">
            <Link href="/">Overview</Link>
            <Link href="/docss/introduction">Documentation</Link>
            <Link href="/example">Examples</Link>
          </div>
        </div>
      </nav>
    </>
  );
}