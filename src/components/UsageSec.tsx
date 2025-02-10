
"use client"
// import { useState, useEffect } from 'react'
import styles from './UsageSec.module.css'
import SectionBox from './SectionBox'
import Head from 'next/head'

// 타입 정의는 이전과 동일

export default function UsageSec({emotions, btns}:any) {


  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
  const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']

  

  // 로딩 중 플레이스홀더 컴포넌트
  
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    
   
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
    </>
  )
}