"use client"
import styles from './ShowMonthlysec.module.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { changedMonthToLang, filterResult } from '@/utlis/toolFn';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



export function ShowMonthlysec({result,monthArr}:any){

const dataArr= filterResult(result,monthArr)
const langMonths = changedMonthToLang(monthArr)

  const data = {
    labels: langMonths,
    datasets: [
      {
        label: "Usage",
        data: dataArr,
        borderColor: "gray",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };
  
  return(
    <div className={styles.page}>
       <div className={styles.usageTitle}>
        <h2>ALL BUTTON USAGE</h2>
      </div>
 <Line data={data} />
    </div>
  )
  
  
 
}