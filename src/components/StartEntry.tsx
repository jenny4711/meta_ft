'use client'

import { useState, useEffect } from 'react'
import { getStartEnterUsagedByCountry } from '@/utlis/apis'
import styles from './StartEntry.module.css'
import SectionBox from './SectionBox'

interface CountryData {
  country: string;
  count: number;
}

// Initial data
const initialData: CountryData[] = [
  { country: 'Loading...', count: 0 }
];

export default function StartEntry({data}:any) {
  const [byCountry, setByCountry] = useState<any>([])

  useEffect(() => {
    if (Array.isArray(data)) {
      setByCountry(data.filter(item => item.country != null))
    }
   
  }, [data])

  return (
    <div className={styles.page}>
      <div className={styles.usageTitle}>
        <h2>INSTALLED BY COUNTRY</h2>
      </div>

      <div className={styles.emBtns}>
        {byCountry.map((item: CountryData) => (
          <SectionBox
            key={item.country}
            title={item.country.toUpperCase()}
            data={item.count}
            width={150}
            height={100}
          />
        ))}
      </div>
    </div>
  )
}