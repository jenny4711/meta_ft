import styles from './DetailUsageSec.module.css'

import SectionHalfBox from './SectionHalfBox';
import { getPhotoUsage,getStoryUsage} from '@/utlis/apis';

export default function DetailUsageSec(){
  const items =['story','photo']
  
  return(
    
    <div className={styles.page}>
    <div className={styles.title} >
    <h2 >STORY AND PHOTO</h2>
    </div>
   
  <div className={styles.detailBox}>

    {
      items.map(async(item:string)=>{
       
        const data10:any= item === 'story'?await getStoryUsage(10,40):await getPhotoUsage(1,1)
        const data40:any=item === 'story'?await getStoryUsage(40,70):await getPhotoUsage(2,2)
        const data70:any=item === 'story'?await getStoryUsage(70,100):await getPhotoUsage(3,3)
   
  
     
        return(
          <>
          <SectionHalfBox title={item.toUpperCase()} data10={data10[item] } data40={data40[item]} data70={data70[item]} />
          </>
        )
      
})
    }
  </div>
 

 
  </div>
  )
}


