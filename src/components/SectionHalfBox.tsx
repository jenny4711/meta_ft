'use client'
import styles from './SectionHalfBox.module.css';
export default function SectionHalfBox({
  title,
  data10,
  data40,
  data70,
}: {
  title: string;
  data10: number;
  data40: number;
  data70: number;
}) {
  const height1 = data10 *10
  const height2 = data40 * 10;
  const height3 = data70 * 10;
console.log(height1,'height1')
  return (
    <div className={styles.boxContainer}>
      <h5 className={styles.titleText}>{title}</h5>
      <div className={styles.dataBox}>

        <div className={styles.groupDiv}>
          {/* --------------------------------- */}
          <div className={styles.box}>
            <div className={styles.result}>
          <p className={styles.title}>{title==='STORY'?'10-40':'1'}</p>
          <p >{data10}</p>
          </div>
          <div className={styles.groupBox}>
            <div
              style={{
                height: `${height1}px`, // 높이 설정
                backgroundColor: 'black',
                alignItems:'center'
                
                // 배경 색깔 추가
              }}
            />
            
          </div>
         
          </div>
          
          <div className={styles.box}>
          <div className={styles.result}>
          <p className={styles.title}>{title==='STORY'?'40-70':'2'}</p>
          <p >{data40}</p>
          </div>
         
          <div className={styles.groupBox}>
        
     
            <div
              style={{
                height: `${height2}px`, // 높이 설정
                backgroundColor: 'black',
                alignItems: 'center'
                // 배경 색깔 추가
              }}
            />
            </div>
          </div>
          <div className={styles.box}>
          <div className={styles.result}>
          <p className={styles.title}>{title==='STORY'?'70-100':'3'}</p>
          <p >{data70}</p>
          </div>
       
          <div className={styles.groupBox}>
            <div
              style={{
                height: `${height3}px`, // 높이 설정
                backgroundColor: 'black',
                alignItems: 'center'
                // 배경 색깔 추가
              }}
            />
          </div>
     </div>
          {/* //-------------------------------- */}
        </div>
      </div>
    </div>
  );
}
