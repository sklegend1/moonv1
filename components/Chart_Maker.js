"use client";

import Chart from "chart.js/auto";
import { useEffect,useState } from "react";

const Chart_Maker = (props) => {
    const [isChart,setIsChart] =useState(0)
    const [chartObj,setChartObj]= useState("none")

    useEffect(()=>{
        
        makeChart()
        
    },[])



    useEffect(() => {
        const options = { passive: false };
        const resizing = (e) => {
           setChartObj("resized")
          rePrint()
        };
        window.addEventListener("resize", resizing, options);
        () => window.removeEventListener("resize", resizing, options);
      }, []);

    const rePrint=()=>{
        for(let i in Chart.instances)
        Chart.instances[i].resize()
    }
    
    async function makeChart() {
        //alert(Chart.instances.length)
        const targetCanvas = document.getElementById(props.tagId)
        const data = props.data
        if(isChart==1){
            
            for (let id in Chart.instances) {
                Chart.instances[id].resize();
            }
        }
        //rePrint()
        var targetChart = Chart.getChart(props.tagId)
        if (targetChart){
            targetChart.destroy()
        }
        if(isChart==0){
            // for (let id in Chart.instances) {
            //     alert(id)
            //     Chart.instances[id].destroy();
            // }
            //Chart.instances['0'].destroy()
        new Chart(
          targetCanvas,
          {
            
            type: props.chartType,
            options:{
                cutout: '0%',
                indexAxis:'y',
                responsive:true,
                backgroundColor:['rgba(20,20,120)','rgba(60,80,200)','rgba(110,130,255)','rgba(180,180,255)'],
                borderColor:'rgba(0,0,0)',
                aspectRatio:(props.chartType=="bar"?3/2:1),
                plugins:{
                    legend:{
                        display:false
                    }
                }
            
            } ,
            data: {
              labels:(props.chartType=="bar") && data.map(row => row.year),
              datasets: [
                {
                  label: 'Acquisitions by year',
                  data: data.map(row => row.count),
                  
                }
              ]
            }
          }
        );
        setIsChart(1)
        }
        
      };
    //   if(isChart==0){
        
    //     makeChart()
        
    //   }

  return (
    
    
        <canvas id={props.tagId} className="  "  ></canvas>
    
     
  );
};

export default Chart_Maker;
