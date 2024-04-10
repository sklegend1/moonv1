"use client";

import Chart from "chart.js/auto";
import { useEffect,useState } from "react";
import Chart_Maker from "./Chart_Maker";
const chardData1 = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2012, count: 35 },
    
  ];

  const chardData2 = [
    { year: 2010, count: 4 },
    { year: 2011, count: 42 },
    { year: 2012, count: 28 },
    { year: 2012, count: 15 },
    
  ];

  const chardData3 = [
    { year: 2010, count: 45 },
    { year: 2011, count: 12 },
    { year: 2012, count: 28 },
    { year: 2012, count: 15 },
    
  ];

  const chardData4 = [
    { year: 2010, count: 15 },
    { year: 2011, count: 52 },
    { year: 2012, count: 18 },
    { year: 2012, count: 55 },
    
  ];

  const chardData5 = [
    { year: 2010, count: 55 },
    { year: 2011, count: 22 },
    { year: 2012, count: 8 },
    { year: 2012, count: 45 },
    
  ];

  const chardData6 = [
    { year: 2010, count: 35 },
    { year: 2011, count: 50 },
    { year: 2012, count: 100 },
    { year: 2012, count: 15 },
    
  ];
const Blog_Stats = () => {
    
  return (
    
    <div className=" w-full sm:h-[30vw] h-[90vw] bg-black bg-opacity-25 grid sm:grid-cols-4 grid-cols-2 my-[20vw] sm:my-[5vw] px-[5vw]" >
      <div className=" m-[0.5vw] col-span-2 sm:row-span-2 sm:h-[22vw] h-[28vw]   ">
        <div className=" sm:mx-[4vw] mx-auto my-[2vw] sm:w-[23vw] w-[35vw] "  >
            <Chart_Maker tagId="mainChart" data={chardData1} chartType="pie" />
        </div>
      </div>
      <div className=" m-[0.5vw] sm:h-[0vw] h-[15vw]   ">
        <div className=" mx-auto mt-[0.5vw] sm:w-[18vw] w-[35vw] ">
            <Chart_Maker tagId="Chart1" data={chardData2} chartType="bar" />
        </div>
      </div>
      <div className=" m-[0.5vw] sm:h-[0vw] h-[15vw]">
      <div className=" mx-auto mt-[0.5vw] sm:w-[18vw] w-[35vw]  ">
            <Chart_Maker tagId="Chart2" data={chardData3} chartType="bar" />
        </div>
      </div>
      <div className=" m-[0.5vw] sm:h-[0vw] h-[15vw]">
      <div className=" mx-auto mt-[0.5vw] sm:w-[18vw] w-[35vw]  ">
            <Chart_Maker tagId="Chart3" data={chardData4} chartType="bar" />
        </div>
      </div>
      <div className=" m-[0.5vw] sm:h-[0vw] h-[15vw]">
      <div className=" mx-auto mt-[0.5vw] sm:w-[18vw] w-[35vw]  ">
            <Chart_Maker tagId="Chart4" data={chardData5} chartType="bar" />
        </div>
      </div>
      
    </div>
  );
};

export default Blog_Stats;
