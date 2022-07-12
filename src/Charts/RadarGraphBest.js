import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BestEmployee from '../Pages/BestEmployee.js'
import Chart from 'react-apexcharts'
import "../App.css";

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
        <div className="Chart" style={{backgroundColor:'#fff9dd', border:'1px solid #b29930'}}>
        <p className="be-title"> <span role="img" aria-label="celebrate"> <BestEmployee /> </span> </p>
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
                    categories:['📆 Asistencia', '🔨 Eficiencia','✅ Responsabilidad', '🎯 Metas', '🫱🏼‍🫲🏼 Respeto'],
                    labels: {
                        show: true,
                        style: {
                            colors: ["#a99029", "#a99029", "#a99029", "#a99029", "#a99029"],
                            fontSize: "11px",
                            fontFamily: 'Arial'
                          }
                    }
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
                },
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColors: '#e7d279',
                            strokeWidth: 1,
                            connectorColors: '#e7d279',
                        }
                    }
                }
            }}
            >
            </Chart>
          </div>
        </div>
    </React.Fragment>);
}

export default RadarGraphBest;