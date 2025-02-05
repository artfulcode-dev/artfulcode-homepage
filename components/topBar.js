import Link from "next/link";
import React from "react";
import ThemeSwitch from "../components/themeSwitch";

export default function TopBar() {
  const siteTitle = "artfulcode.dev";

  const [toggleMenuBtn, setToggleMenuBtn] = React.useState(false);

  return (
    <nav className="fixed max-w-2xl w-full pr-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/*
         logo
         */}
        <div className="z-30">
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-widest">
              {siteTitle}
            </h1>
          </Link>
        </div>
        {/*
        menu
      */}
        <div className="hidden items-center space-x-10 md:flex">
          <h2 className="block tracking-widest hover:underline">
            <Link href="/posts">Posts</Link>
          </h2>
          <h2 className="block tracking-widest hover:underline">
            <Link href="https://github.com/artfulcode-dev/artfulcode-homepage">
              Source
            </Link>
          </h2>
          <ThemeSwitch />
        </div>
        {/*
          Hamburger button
        */}

        <div className="md:hidden flex items-center justify-between space-x-8">
          {toggleMenuBtn ? "" : <ThemeSwitch />}
          <button
            className={`block ${toggleMenuBtn ? "open" : "hamburger"}`}
            onClick={() => {
              setToggleMenuBtn(!toggleMenuBtn);
            }}
          >
            <span className="hamburger-top dark:bg-white"></span>
            <span className="hamburger-middle dark:bg-white"></span>
            <span className="hamburger-bottom dark:bg-white"></span>
          </button>
        </div>
      </div>
      {/*
          Mobile menu
        */}
      <div
        className={`${
          toggleMenuBtn ? "" : "hidden"
        } inset-0 flex flex-col justify-center px-6 py-1 bg-gray-500 opacity-90 m-h-screen text-white tracking-widest w-full h-f-full text-xl divide-y divide-white`}
      >
        <h1 className="py-3 text-white text-center w-full hover:text-slate-400">
          <Link href="/posts">Posts</Link>
        </h1>
        <h1 className="py-3 text-white text-center w-full hover:text-slate-400">
          <Link href="https://github.com/artfulcode-dev/artfulcode-homepage">
            Source
          </Link>
        </h1>
      </div>
    </nav>
  );
}
