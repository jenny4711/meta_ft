'use client'

import { useState, useEffect } from 'react'
import styles from './UsageSec.module.css'
import SectionBox from './SectionBox'
import { getEmotionData, getOtherBtnsUsage } from '@/utlis/apis'

// 타입 정의는 이전과 동일

export default function UsageSec() {
  const [emotionsData, setEmotionsData] = useState<any>([])
  const [btnsData, setBtnsData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
  const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const emotions: any = await Promise.all(
          emBtns.map(async (item) => {
            const emotion = await getEmotionData()
            return { item, emotion }
          })
        )

        const btns: any= await Promise.all(
          otherBtns.map(async (item) => {
            const btnData = await getOtherBtnsUsage(item)
            return { item, btnData }
          })
        )

        setEmotionsData(emotions)
        setBtnsData(btns)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // 로딩 중 플레이스홀더 컴포넌트
  const LoadingPlaceholder = () => (
    <div className={styles.loadingPlaceholder}>
      Loading...
    </div>
  )

  return (
    <div className={styles.page}>
      <div className={styles.usageTitle}>
        <h2>USAGE</h2>
      </div>

      <div className={styles.emBtns}>
        {emBtns.map((item) => {
          const emotionData = emotionsData.find(e => e.item === item)
          return (
            <SectionBox
              key={item}
              title={item.toUpperCase()}
              data={isLoading ? 0 : emotionData?.emotion?.[item as any]}
              width={180}
              height={100}
            />
          )
        })}
      </div>

      <div className={styles.otherBtns}>
        {otherBtns.map((item) => {
          const btnData = btnsData.find(b => b.item === item)
          return (
            <SectionBox
              key={item}
              title={item.toUpperCase()}
              data={isLoading ? 0 : btnData?.btnData?.[item]}
              width={180}
              height={100}
            />
          )
        })}
      </div>
    </div>
  )
}