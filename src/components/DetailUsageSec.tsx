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


export default function DetailUsageSec({newItemsData }:{newItemsData :any}) {
 

 

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>STORY AND PHOTO SIZE</h2>
      </div>
      <div className={styles.detailBox}>
        {newItemsData .map(({ item, data10, data40, data70 }) => {
          console.log(item,'item')
          return(
<SectionHalfBox
            key={item}
            title={item.toUpperCase()}
            data10={data10}
            data40={data40}
            data70={data70}
          />
          )
          
          
        })   }
      </div>
    </div>
  )
}