"use server"
const url = process.env.NEXT_PUBLIC_API_SERVER_URL
const fullUrl = `${url}/event`
import { revalidateTag } from 'next/cache'
interface CountryUsage {
  usageByCountry: {count:number,country:string}[];
  message:string  // 예시로 'usageByCountry'가 배열인 경우
}

interface AreaUsage {
  message:string  
  usageByLocation: {country:string,city:string,count:number};  // 예시로 'usageByLocation'이 배열인 경우
}

interface PhotoUsage {
  message: string;
  photo: number;
}

interface StoryUsage {
  message: string;
  story: number;
}

interface ButtonUsageData {
  [key: string]: any;  // 예시로 `key: value` 형태로 받아오는 데이터
}

interface EmotionData {
  emotion: string;  // 예시로 'emotion'이 문자열 배열인 경우
}

export async function refreshData() {
  revalidateTag('all')
}

export async function getEmotionData(): Promise<EmotionData | undefined> {
  try{
   
    const res = await fetch(`${fullUrl}/getEmotion`,{next:{tags:['all']}} )
  const result: any = await res.json()


  return result
  
  }catch(error){
    console.log(error,'getEmotionData')
  }

 
}


export async function getOtherBtnsUsage(item:string): Promise<ButtonUsageData | undefined> {
  try{
    let res ;
    if(item === 'plusBtn'){
        res = await fetch(`${fullUrl}/plusbtn`,{next:{tags:['all']}})
    }else if (item === 'dark'){
      res=await fetch(`${fullUrl}/theme`,{next:{tags:['all']}})
    }else if (item === 'light'){
      res=await fetch(`${fullUrl}/theme`,{next:{tags:['all']}})
    }else if(item ==='deleteAllEntries' ){
      res=await fetch(`${fullUrl}/deletedAll`,{next:{tags:['all']}})
    }else if(item ==='story'){
      const start =1
      const end =100
      res=await fetch(`${fullUrl}/story/${start}/${end}`,{next:{tags:['all']}})
    }else {
      const start =1
      const end =3
      res=await fetch(`${fullUrl}/photo/${start}/${end}`,{next:{tags:['all']}})
    }
    const result =await  res.json()
    return result
  }catch(error){
    console.log('getOtherBtnsUsage-error',error)
  }
}

export async function getStoryUsage(start:number,end:number): Promise<StoryUsage | undefined> {
try{
  const res=await fetch(`${fullUrl}/story/${start}/${end}`,{next:{tags:['all']}})
  const result: StoryUsage = await res.json()


  return result
} catch(error){
  console.log('error-getStoryUsage',error)
  }
}


export async function getPhotoUsage(start:number,end:number): Promise<PhotoUsage | undefined> {
  try{
    const  res=await fetch(`${fullUrl}/photo/${start}/${end}`,{next:{tags:['all']}})
  const result: PhotoUsage= await res.json()
 

  return result
  } catch(error){
    console.log('error-getPhotoUsage',error)
  }
  }


  export async function getUsageByArea():Promise<AreaUsage[] | undefined>{
try{
  const  res=await fetch(`${fullUrl}/showArea`,{next:{tags:['all']}})
  const result:any = await res.json()

  return result.usageByLocation
}catch(error){
  console.log(error,'error-getUsageByArea')
}
  }



  export async function getStartEnterUsagedByCountry():Promise<CountryUsage[] | undefined>{
    try{
      const  res=await fetch(`${fullUrl}/usagedCountry`,{next:{tags:['all']}})
  const result:any = await res.json()

  return result.usageByCountry
    }catch(error){
      console.log(error,'error getStartEnterUsagedByCountry')
    }
  }

  export async function getCurrentMonthUsage(){
    try{
      const res = await fetch(`${fullUrl}/currentMonty`,{next:{tags:['all']}} )
      const result:any= await res.json()
      return result.monthlyEvents
    }catch(error){
      console.log(error,'error getCurrentMonthUsage')
    }
  }

  export async function getMonthlyUsage({fromM,fromY,toM,toY}:any){
    try{
      const res = await fetch(`${fullUrl}/byMonth/${fromM}/${fromY}/${toM}/${toY}`,{next:{tags:['all']}} )
      const result:any= await res.json()
      return result. eventsInCustomMonth
    }catch(error){
      console.log(error,'error getMonthlyUsage')
    }
  }
