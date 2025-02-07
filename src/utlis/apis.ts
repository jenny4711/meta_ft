const url = process.env.NEXT_PUBLIC_API_SERVER_URL
const fullUrl = `${url}/event/`
export async function getEmotionData(){
  try{
    const res = await fetch(`${fullUrl}/getEmotion`)
  const result:any = await res.json()
 

  return result
  
  }catch(error){
    console.log(error,'getEmotionData')
  }

 
}


export async function getOtherBtnsUsage(item:any){
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

export async function getStoryUsage(start:any,end:any){
try{
  const res=await fetch(`${fullUrl}/story/${start}/${end}`)
  const result:any = await res.json()
 

  return result
} catch(error){
  console.log('error-getStoryUsage')
  }
}


export async function getPhotoUsage(start:any,end:any){
  try{
    const  res=await fetch(`${fullUrl}/photo/${start}/${end}`)
  const result:any = await res.json()
 

  return result
  } catch(error){
    console.log('error-getPhotoUsage')
  }
  }


  export async function getUsageByArea(){
try{
  const  res=await fetch(`${fullUrl}/showArea`)
  const result:any = await res.json()

  return result.usageByLocation
}catch(error){
  console.log(error,'error-getUsageByArea')
}
  }



  export async function getStartEnterUsagedByCountry(){
    try{
      const  res=await fetch(`${fullUrl}/usagedCountry`)
  const result:any = await res.json()

  return result.usageByCountry
    }catch(error){
      console.log(error,'error getStartEnterUsagedByCountry')
    }
  }