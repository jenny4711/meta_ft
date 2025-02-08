
"use client"
// import { useState, useEffect } from 'react'
import styles from './UsageSec.module.css'
import SectionBox from './SectionBox'


// 타입 정의는 이전과 동일

export default function UsageSec({emotions, btns}:any) {
  // const [emotionsData, setEmotionsData] = useState<any>([])
  // const [btnsData, setBtnsData] = useState<any>([])
  // const [isLoading, setIsLoading] = useState(true)

  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
  const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const emotions: any = await Promise.all(
  //         emBtns.map(async (item) => {
  //           const emotion = await getEmotionData()
  //           return { item, emotion }
  //         })
  //       )

  //       const btns: any= await Promise.all(
  //         otherBtns.map(async (item) => {
  //           const btnData = await getOtherBtnsUsage(item)
  //           return { item, btnData }
  //         })
  //       )

  //       setEmotionsData(emotions)
  //       setBtnsData(btns)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // 로딩 중 플레이스홀더 컴포넌트
  
  return (
    <div className={styles.page}>
      <div className={styles.usageTitle}>
        <h2>USAGE</h2>
      </div>

      <div className={styles.emBtns}>
        {emotions.map((item:any) => {
          // console.log(item,'item')
         const name = item.item
         const data=item.emotion[name]
         
          return (
           
            <SectionBox
              key={item}
            
              title={item.item.toUpperCase()}
              data={data}
              width={180}
              height={100}
            />
          )
        })}
      </div>

      <div className={styles.otherBtns}>
        {btns.map((item:any) => {
       const name=item.item
       const data =item.btnData[name]
     
          return (
            <SectionBox
              key={item}
              title={item.item.toUpperCase()}
              data={data}
             
              width={180}
              height={100}
            />
          )
        })}
      </div>
    </div>
  )
}