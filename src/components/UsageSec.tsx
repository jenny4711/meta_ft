import styles from './UsageSec.module.css'
import SectionBox from './SectionBox'
import { getEmotionData,getOtherBtnsUsage} from '@/utlis/apis';
export default function UsageSec(){
  const emBtns =['veryHappy','happy','neutral','sad','worst']
  const otherBtns =['plusBtn','dark','light','deleteAllEntries','story','photo']
  return(
    
    <div className={styles.page}>
    <div className={styles.usageTitle} >
    <h2 >USAGE</h2>
    </div>
   
  <div className={styles.emBtns}>

    {
      emBtns.map(async(item:string)=>{
        const emotion= await getEmotionData()
       
        return(
          <>
          <SectionBox title={item.toUpperCase()} data={emotion[item]} width={180} height={100}/>
          </>
        )
      
})
    }
  </div>
  <div className={styles.otherBtns}>
  
  {
      otherBtns.map(async(item:string)=>{
        const btns= await getOtherBtnsUsage(item)
     
        return(
          <>
          <SectionBox title={item.toUpperCase()} data={btns[item]} width={180} height={100}/>
          </>
        )
      
})
    }
  </div>

 
  </div>
  )
}