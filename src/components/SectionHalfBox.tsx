import styles from './SectionHalfBox.module.css';
export default function SectionHalfBox({
  title,
  data10,
  data40,
  data70,
}: {
  title: any;
  data10: any;
  data40: any;
  data70: any;
}) {
  const height1 = data10 *30
  const height2 = data40 * 30;
  const height3 = data70 * 30;

  return (
    <div className={styles.boxContainer}>
      <h5 className={styles.titleText}>{title}</h5>
      <div className={styles.dataBox}>

        <div className={styles.groupDiv}>
          {/* --------------------------------- */}
          <div className={styles.box}>
          <p>{title==='STORY'?'10-40':'1'}</p>
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
          <p>{title==='STORY'?'40-70':'2'}</p>
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
          <p>{title==='STORY'?'70-100':'3'}</p>
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
