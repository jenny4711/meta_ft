import { getStartEnterUsagedByCountry } from '@/utlis/apis';
import styles from './StartEntry.module.css'
import SectionBox from './SectionBox'
export default async function StartEntry(){
 
  const byCountry = await getStartEnterUsagedByCountry()
  
  return(
     
    <div className={styles.page}>
    <div className={styles.usageTitle} >
    <h2 >INSTALLED BY COUNTRY</h2>
    </div>
   
  <div className={styles.emBtns}>

    {
     byCountry .map(async(item:any)=>{
     
       const country =item.country? item.country:null
      const count = item.country?item.count:null
        return(
          <>
         {item.country? <SectionBox title={country.toUpperCase()} data={count} width={150} height={100}/>:null}
          </>
        )
      
})
    }
  </div>
  

 
  </div>
  )
}