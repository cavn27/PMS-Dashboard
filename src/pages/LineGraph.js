import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Chart from 'react-apexcharts'
import "../App.css";

function LineGraph()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/Sheet2");
            const resData= await reqData.json();
            // console.log(resData);
            for(let i=0; i < resData.length; i++)
            {
                newvalue.push({name:resData[i].Empleado, data:[resData[i].Asistencia, resData[i].Eficiencia, resData[i].Responsabilidad, resData[i].Metas, resData[i].Respeto] });   
            }
            setSdata(newvalue);

        }
        getvaluedata();
    },[]);   

    return(<React.Fragment>
        <div>
          <h2>  </h2>          
          <Chart
          className="Chart"
          type='line'
          series={sData}
          options={{
            // title:{ text:"Productividad de Trabajadores"},
            xaxis:{
                //title:{text:"Categoría"},
                categories:['Asistencia', 'Eficiencia', 'Responsabilidad', 'Metas', 'Respeto']
            },
            yaxis:{
                //title:{text:"Puntuación"}                 
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        }}
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default LineGraph;