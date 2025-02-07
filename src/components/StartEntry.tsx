import { getStartEnterUsagedByCountry } from '@/utlis/apis';
import styles from './StartEntry.module.css'
import SectionBox from './SectionBox'


export default async function StartEntry(){
 
  const byCountry: any= await getStartEnterUsagedByCountry()

  return(
     
    <div className={styles.page}>
    <div className={styles.usageTitle}>
      <h2>INSTALLED BY COUNTRY</h2>
    </div>

    <div className={styles.emBtns}>
      {byCountry.map((item:any) => {
        // null 체크 추가
        if (item.country) {
          return (
            <SectionBox
              key={item.country}  // 고유한 key를 추가하는 것이 좋습니다.
              title={item.country.toUpperCase()}
              data={item.count}
              width={150}
              height={100}
            />
          );
        }
        return null; // country가 null일 경우 아무것도 반환하지 않음
      })}
    </div>
  </div>
  )
}