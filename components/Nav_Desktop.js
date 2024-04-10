"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Nav_Desktop = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [ScreenHeight, setScreenHeight] = useState(0);
  const [NavShow, setNavShow] = useState(1);
  const [SubMenu1, setSubMenu1] = useState(false);
  const [ProfileSubMenu1, setProfileSubMenu1] = useState(false);

  useEffect(() => {
    const options = { passive: true };
    const scroll = (event) => {
      setScrollY(window.scrollY);
      setSubMenu1(false);
      setProfileSubMenu1(false);
      ScrollY < 50 ? setNavShow(1) : setNavShow(0);
    };
    window.addEventListener("scroll", scroll, options);
    () => window.removeEventListener("scroll", scroll, options);
  }, [ScrollY]);

  useEffect(() => {
    const options = { passive: false };
    const resizing = (e) => {
      
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizing, options);
    () => window.removeEventListener("resize", resizing, options);
  }, []);

  return (
    <>
      <div
        className=" p-2 rounded-md  bg-[#122d45]  fixed top-0 z-[55] m-4  left-0
             border-blue-400  border-[1px] border-opacity-40 bg-opacity-90 cursor-pointer "
        onClick={() => {
          setNavShow(!NavShow);
          setSubMenu1(false);
          setProfileSubMenu1(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[2vw] h-[2vw]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <nav
        className={` left-[5vw] ml-[1vw]  fixed  z-50 grid grid-cols-[repeat(6,minmax(3vw,8vw))]
             w-screen p-4 text-center text-[1vw] gap-1 rounded-md bg-opacity-45 select-none `}
        style={{
          top: `-10vw`,
          transform: `translateY(${10 * NavShow}vw)`,
          transition: "transform ease-in 200ms",
        }}
      >
        <Link
          href="/"
          className=" bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90 "
        >
          Home
        </Link>

        <div
          href="/#advertising"
          className=" cursor-pointer bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90"
          onClick={() => setSubMenu1(!SubMenu1)}
        >
          Services&emsp;

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1vw] h-[1vw] inline "
          style={{rotate:`${SubMenu1?180:0}deg`}}
          >
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>

        </div>

        <div
          className={`${
            !SubMenu1 && "hidden"
          } col-start-2 row-start-2  bg-[#122d45] rounded-md py-1 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90`}
        >
          <ul>
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
          </ul>
        </div>
        <Link
          href="/"
          className=" bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90"
        >
          Moon Academy
        </Link>
        <Link
          href="/blog"
          className=" bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90"
        >
          Blog
        </Link>
        <Link
          href="/"
          className=" bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90"
        >
          About Us
        </Link>
        <Link
          href="/"
          className=" bg-[#122d45] rounded-md py-2 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90"
        >
          Contact Us
        </Link>
      </nav>
      <div
        className="right-[2vw] sm:m-[1vw] mt-[2vw] sm:mr-[1vw] grid grid-cols-1 fixed  z-50 
               text-center text-[1vw]"
        style={{
          top: `-10vw`,
          transform: `translateY(${10 * NavShow}vw)`,
          transition: "transform ease-in 200ms",
        }}
      >
        <div
          className={` border-blue-400 sm:p-[1vw] p-[2vw] border-[1px] border-opacity-40  rounded-full bg-opacity-90 bg-[#122d45] cursor-pointer `}
          onClick={() => setProfileSubMenu1(!ProfileSubMenu1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[2vw] h-[2vw]"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`${!ProfileSubMenu1 && "hidden"}
            
            row-start-2 fixed w-[150%] left-[-1vw] top-3 bg-[#122d45] rounded-md py-1 border-blue-400  border-[1px] border-opacity-40 bg-opacity-90`}
        >
          <ul>
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
            <hr className=" opacity-30" />
            <li>Item 1</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav_Desktop;
