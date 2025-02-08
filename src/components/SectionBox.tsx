'use client'
import styles  from './SectionBox.module.css'

export default function SectionBox({title,data,width,height}:{title:string,data:number,width:number,height:number}){

return(
  <div className={styles.boxContainer}
  style={{
    height: `${height}px`, // 높이 설정
    width:`${width}px`,
  
    
    // 배경 색깔 추가
  }}
  >
    <h5 className={styles.titleText}>{title}</h5>
    <div className={styles.dataBox}>
<h1>{data}</h1>
</div>
  </div>
)
  

}


