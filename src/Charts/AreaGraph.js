import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Chart from 'react-apexcharts'
import "../App.css";

function AreaGraph()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/Metrics");
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
        <div className="Chart" style={{border:'2px solid #eceae8'}}>
          <p> Estadística Mensual </p>
          <div className="Chart-body">        
            <Chart
            type='area'
            series={sData}
            options={{
                // title:{ text:"Productividad de Trabajadores"},
                height:'auto',
                width:'auto',
                xaxis:{
                    //title:{text:"Categoría"},
                    categories:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
                },
                yaxis:{
                    //title:{text:"Puntuación"},
                    lines: { show: true }

                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2,

                },
                dataLabels: {
                    enabled: false,
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
                              filename: 'Estadística Mensual',
                            },
                            svg: {
                              filename: 'Estadística Mensual',
                            },
                            png: {
                              filename: 'Estadística Mensual',
                            }
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

export default AreaGraph;