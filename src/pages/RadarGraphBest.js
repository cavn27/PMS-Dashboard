import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Chart from 'react-apexcharts'
import "../App.css";

import Prueba1 from './Prueba1.js';

function RadarGraphBest()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/BestEmployee");
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
          <h2> Mejor Trabajador <span role="img" aria-label="celebrate"> 🎉 </span> </h2>
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
                    categories:['📆 Asistencia', '🔨 Eficiencia','✅ Responsabilidad', '🎯 Metas', '🫱🏼‍🫲🏼 Respeto']
                },
                yaxis:{
                    // title:{text:"Puntuación"}
                    show: false,      
                },
                labels:sData,             
                markers: {
                    size: 2.5,
                    hover: {
                      size: 5
                    }
                },
                stroke: {
                    show: true,
                    width: 1.5
                },
                chart: {
                    toolbar: {
                        show: true,
                        tools: {
                            download: '⬇️',
                            selection: false,
                            zoom: '🔍',
                            zoomin: '➕',
                            zoomout: '➖',
                            pan: false,
                            reset: '🔄️'
                        },
                        export: {
                            csv: {
                              filename: 'Estadísticas Específicas',
                            },
                            svg: {
                              filename: 'Estadísticas Específicas',
                            },
                            png: {
                              filename: 'Estadísticas Específicas',
                            }
                        }
                    }
                },
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                }
            }}
            >
            </Chart>
          </div>
          <div className="Best-employee">
            <div className="gradient-text"> 
                <Prueba1 /> 
            </div>
          </div>
        </div>
    </React.Fragment>);
}

export default RadarGraphBest;