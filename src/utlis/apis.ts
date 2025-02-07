const url = process.env.NEXT_PUBLIC_API_SERVER_URL
const fullUrl = `${url}/event/`

interface CountryUsage {
  usageByCountry: {count:number,country:string}[];
  message:string  // 예시로 'usageByCountry'가 배열인 경우
}

interface AreaUsage {
  message:string  
  usageByLocation: {country:string,city:string,count:number};  // 예시로 'usageByLocation'이 배열인 경우
}

interface PhotoUsage {
  images: any[]; // 예시로 'images'가 배열인 경우
}

interface StoryUsage {
  data: any[]; // 예시로 'data'가 배열인 경우
}

interface ButtonUsageData {
  [key: string]: any;  // 예시로 `key: value` 형태로 받아오는 데이터
}

interface EmotionData {
  emotion: string[];  // 예시로 'emotion'이 문자열 배열인 경우
}

export async function getEmotionData(): Promise<EmotionData | undefined> {
  try{
    const res = await fetch(`${fullUrl}/getEmotion`)
  const result: EmotionData  = await res.json()
 

  return result
  
  }catch(error){
    console.log(error,'getEmotionData')
  }

 
}


export async function getOtherBtnsUsage(item:string): Promise<ButtonUsageData | undefined> {
  try{
    let res ;
    if(item === 'plusBtn'){
        res = await fetch(`${fullUrl}/plusbtn`)
    }else if (item === 'dark'){
      res=await fetch(`${fullUrl}/theme`)
    }else if (item === 'light'){
      res=await fetch(`${fullUrl}/theme`)
    }else if(item ==='deleteAllEntries' ){
      res=await fetch(`${fullUrl}/deletedAll`)
    }else if(item ==='story'){
      const start =1
      const end =100
      res=await fetch(`${fullUrl}/story/${start}/${end}`)
    }else {
      const start =1
      const end =3
      res=await fetch(`${fullUrl}/photo/${start}/${end}`)
    }
    const result =await  res.json()
    return result
  }catch(error){
    console.log('getOtherBtnsUsage-error')
  }
}

export async function getStoryUsage(start:number,end:number): Promise<StoryUsage | undefined> {
try{
  const res=await fetch(`${fullUrl}/story/${start}/${end}`)
  const result: StoryUsage = await res.json()
 

  return result
} catch(error){
  console.log('error-getStoryUsage')
  }
}


export async function getPhotoUsage(start:number,end:number): Promise<PhotoUsage | undefined> {
  try{
    const  res=await fetch(`${fullUrl}/photo/${start}/${end}`)
  const result: PhotoUsage= await res.json()
 

  return result
  } catch(error){
    console.log('error-getPhotoUsage')
  }
  }


  export async function getUsageByArea():Promise<AreaUsage[] | undefined>{
try{
  const  res=await fetch(`${fullUrl}/showArea`)
  const result:any = await res.json()

  return result.usageByLocation
}catch(error){
  console.log(error,'error-getUsageByArea')
}
  }



  export async function getStartEnterUsagedByCountry():Promise<CountryUsage[] | undefined>{
    try{
      const  res=await fetch(`${fullUrl}/usagedCountry`)
  const result:any = await res.json()
   console.log(result,'result')
  return result.usageByCountry
    }catch(error){
      console.log(error,'error getStartEnterUsagedByCountry')
    }
  }

