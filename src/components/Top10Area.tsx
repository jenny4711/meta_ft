import SectionBox from './SectionBox'
import { getUsageByArea} from '@/utlis/apis';
import styles from './Top10Area.module.css'

export default async function Top10Area(){
const area = await getUsageByArea()

  return(
     
    <div className={styles.page}>
    <div className={styles.usageTitle} >
    <h2 >USAGE BY AREA</h2>
    </div>
   
  <div className={styles.emBtns}>

    {
     area.map(async(item:any)=>{
     
       const country =item.country? item.country:null
       const city = item.city?item.city:null
       const count = item.city?item.count:null
       const title = `${city}, ${country}`
        return(
          <>
         {item.city? <SectionBox title={title.toUpperCase()} data={count} width={250} height={100}/>:null}
          </>
        )
      
})
    }
  </div>
  

 
  </div>
  )
}