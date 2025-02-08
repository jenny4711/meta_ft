'use client'

import { useState, useEffect } from 'react'
import SectionBox from './SectionBox'
import { getUsageByArea } from '@/utlis/apis'
import styles from './Top10Area.module.css'

interface Top10 {
  country: string;
  city: string;
  count: number;
}

// Initial data
const initialData: Top10[] = [
  { country: 'Loading', city: 'Loading', count: 0 }
];

export default function Top10Area() {
  const [area, setArea] = useState<Top10[]>(initialData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsageByArea()
        if (Array.isArray(data)) {
          const filteredData = data
            .filter((item): item is any => 
              item !== null && 
              typeof item === 'object' && 
              'city' in item && 
              item.city !== null
            )
            .map((item : any)=> ({
              country: item.country || 'Unknown',
              city: item.city || 'Unknown',
              count: item.count || 0
            }))
          setArea(filteredData)
        }
      } catch (error) {
        console.error('Error fetching area data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.usageTitle}>
        <h2>USAGE BY AREA</h2>
      </div>
      
      <div className={styles.emBtns}>
        {area.map((item: Top10) => {
          const title = `${item.city}, ${item.country}`
          
          return (
            <SectionBox 
              key={`${item.city}-${item.country}`}
              title={title.toUpperCase()} 
              data={item.count} 
              width={250} 
              height={100}
            />
          )
        })}
      </div>
    </div>
  )
}