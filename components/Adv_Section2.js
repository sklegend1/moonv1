'use client'

import Image from "next/image"
import Letters from "@/public/letters.png"
import Design from "@/public/designing.png"
import Print from "@/public/print.png"
import { useState } from "react"
import Adv_Des from "./Adv_Des"
import Adv_Des_Mob from "./Adv_Des_Mob"

const DESCRIPTION={
  title:"Printing Services",
  text:`Ut duis adipisicing ipsum adipisicing nostrud. Commodo non cupidatat et est labore. Excepteur deserunt ex quis enim tempor et. Quis esse duis proident cupidatat occaecat exercitation laborum. Mollit in esse magna esse do id eiusmod elit deserunt. Exercitation in nostrud dolor minim labore sit consequat.

Id nostrud nostrud consequat magna dolor mollit duis officia occaecat aliquip nisi. Consequat est Lorem tempor aliquip aliqua exercitation. Pariatur consequat deserunt esse culpa veniam adipisicing cupidatat anim laborum sunt proident. Cupidatat aute aliquip incididunt qui aliquip irure tempor duis tempor. In labore anim aliqua est dolore commodo sunt non proident irure culpa commodo in.

Veniam nisi aliquip ullamco laboris esse aute cupidatat minim qui eu do. Consectetur do magna sunt reprehenderit aliquip officia do. Elit exercitation aute magna ex.`
}

const Adv_Section = () => {

    const [ImgState,SetImgState]=useState("0deg")

    const ImgSetup=()=>{
      ImgState<3? SetImgState(ImgState+1) : SetImgState(0)
    }

    return (
        <section id="advertising" className=" text-left ">
        
        <h1 className=" ml-[5%] text-[hsl(194,55%,83%)] sm:text-6xl text-xl font-black">Advertising Services</h1>
        <div className=" grid grid-cols-3">
          <div className=" col-span-1 h-[30vw] relative overflow-hidden ">
            <div className={` left-[-120%] top-[-125%] absolute w-[220%] grid grid-cols-2 grid-rows-2 mx-[10%] transition-transform `}
              style={{transform:`rotate(${ImgState})`}}
            >
              <div className=" p-[15%] col-span-1 col-start-2 row-start-1 row-span-1   " style={{rotate:"270deg"}}>
                <Image src={Print } className=" w-full mt-4 mx-auto "/>
                {/* <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Printing"}</h2> */}
              </div>
              <div className=" p-[15%] col-span-1 row-start-2 col-start-2 row-span-1  ">
                <Image src={Letters } className=" w-full mt-4 mx-auto "/>
                {/* <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Letter Signs"}</h2> */}
              </div>
              <div className="  p-[11%]  col-span-1 row-start-1 row-span-1 col-start-1 " style={{rotate:"180deg"}}>
                <Image src={Design } className=" w-full mt-4 mx-auto "/>
                {/* <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Graphic Design"}</h2> */}
              </div>
            </div>
          </div>
          <div className=" sm:flex sm:col-span-3 sm:col-start-2 sm:pl-[20vw] hidden ">
            <Adv_Des obj={DESCRIPTION}/>
          </div>
        </div>
        <div className=" grid grid-cols-3 w-[50vw] text-center">
          <span className=" text-[#b7fffd] text-[2vw] font-medium cursor-pointer " onClick={()=>{SetImgState("0deg")}}>{"Printing"}</span>
          <span className=" text-[#b7fffd] text-[2vw] font-medium cursor-pointer " onClick={()=>{SetImgState("90deg")}}>{"Letter Signs"}</span>
          <span className=" text-[#b7fffd] text-[2vw] font-medium cursor-pointer " onClick={()=>{SetImgState("180deg")}}>{"Graphic Design"}</span>
        </div>
        <div className=" sm:flex sm:col-span-3 sm:col-start-2 sm:pl-[20vw] sm:hidden ">
            <Adv_Des_Mob obj={DESCRIPTION}/>
        </div>
      </section>
    );
}

export default Adv_Section;