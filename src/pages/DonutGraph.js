import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import "../App.css";

function Donut()
{
  const [Empleado, setEmpleado]= useState([]);
  const [Asistencia, setAsistencia]= useState([]);

  useEffect( ()=>{
       const Empleado=[];
       const Asistencia=[];
       const getData= async()=>{
       const reqData= await fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/Sheet2");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        Empleado.push(resData[i].Empleado);
        Asistencia.push(parseInt(resData[i].Asistencia));
       }
       setEmpleado(Empleado);
       setAsistencia(Asistencia);
       // console.log(resData); 
       }
       
  getData();

  },[]);

    return(
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Productividad Empleados </h3>
                <Chart 
                type="donut"
                width={850}
                height={550}

                series={ Asistencia }

                options={{
                        // title:{ text:"Employee PieChart" },
                        noData:{text:"Empty Data"},
                        // colors:["#f90000","#f0f"],
                        labels:Empleado
                    }}
                >
                </Chart>
            </div>
    );
}
export default Donut;