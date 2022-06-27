import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Chart from 'react-apexcharts'
import "../App.css";

function RadarGraphPhone()
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
        <div className="Chart">
          <h2> Estadísticas Específicas </h2>
          <div className="Chart-body">       
            <Chart
            type='radar'
            series={sData}
            options={{
                // title:{ text:"Productividad de Trabajadores"},
                height:'auto',
                width:'auto',
                xaxis:{
                    // title:{text:"Categoría"},
                    categories:['📆', '🔨','✅', '🎯', '🫱🏼‍🫲🏼']
                },
                yaxis:{
                    // title:{text:"Puntuación"}
                    show: false
                },
                markers: {
                    size: 2,
                    hover: {
                      size: 5
                    }
                },
                stroke: {
                    show: true,
                    width: 1.5
                },
                legend: {
                    show: false,
                },
                chart: {
                    toolbar: {
                        show: false,
                    }
                }
            }}
            >
            </Chart>
          </div>
        </div>
    </React.Fragment>);
}

export default RadarGraphPhone;