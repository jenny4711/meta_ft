'use client'

import { useState, useEffect } from 'react'
import styles from './DetailUsageSec.module.css'
import SectionHalfBox from './SectionHalfBox'
import { getPhotoUsage, getStoryUsage } from '@/utlis/apis'

interface ItemData {
  item: 'story' | 'photo';
  data10: number;
  data40: number;
  data70: number;
}

// 초기 데이터
const initialData: ItemData[] = [
  { item: 'story', data10: 0, data40: 0, data70: 0 },
  { item: 'photo', data10: 0, data40: 0, data70: 0 }
];

export default function DetailUsageSec() {
  const [itemsData, setItemsData] = useState<ItemData[]>(initialData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = ['story', 'photo'] as const;

        const newItemsData = await Promise.all(items.map(async (item) => {
          let data10, data40, data70;

          if (item === 'story') {
            data10 = await getStoryUsage(10, 40)
            data40 = await getStoryUsage(40, 70)
            data70 = await getStoryUsage(70, 100)
          } else {
            data10 = await getPhotoUsage(1, 1)
            data40 = await getPhotoUsage(2, 2)
            data70 = await getPhotoUsage(3, 3)
          }

          return {
            item,
            data10: data10?.[item] ?? 0,
            data40: data40?.[item] ?? 0,
            data70: data70?.[item] ?? 0
          }
        }))

        setItemsData(newItemsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>STORY AND PHOTO</h2>
      </div>
      <div className={styles.detailBox}>
        {itemsData.map(({ item, data10, data40, data70 }) => (
          <SectionHalfBox
            key={item}
            title={item.toUpperCase()}
            data10={data10}
            data40={data40}
            data70={data70}
          />
        ))}
      </div>
    </div>
  )
}