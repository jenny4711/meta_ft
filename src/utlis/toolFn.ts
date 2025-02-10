export function generateMonthArray(fromM:any, fromY:any, toM:any, toY:any) {
  let months:any = [];
  
  if (fromY === toY) {
    // 같은 해라면 단순히 fromM부터 toM까지 배열 생성
    for (let i = fromM; i <= toM; i++) {
      months.push(i);
    }
  } else {
    // 다른 해라면 (예: 10월~3월)
    for (let i = fromM; i <= 12; i++) {
      months.push(i); // 올해 남은 월 추가 (예: 10, 11, 12)
    }
    for (let i = 1; i <= toM; i++) {
      months.push(i); // 다음 해의 월 추가 (예: 1, 2, 3)
    }
  }

  return months;
}


export function filterResult (result:any,monthArr:any){
  let arr=[]
  const first = result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
  
    return m === monthArr[0] 
  })

  const second = result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
 
    return m === monthArr[1] 
  })
  const third = result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
    
    return m === monthArr[2] 
  })

  const fourth= result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
   
    return m === monthArr[3] 
  })

  const fifth= result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
    console.log(monthArr,'monthArr')
    return m === monthArr[4] 
  })

  const sixth= result.filter((item)=>{
    const m = new Date(item.timestamp).getMonth()+1
    console.log(monthArr,'monthArr')
    return m === monthArr[5] 
  })



return [first.length,second.length,third.length,fourth?.length,fifth?.length,sixth?.length]
}



export function changedMonthToLang (monthArr:any){

 return monthArr.map((month:any)=>{
  const date = new Date(2000, month-1 , 1); // 연도를 임의로 2000년으로 설정
  return date.toLocaleString("en-US", { month: "long" }); // "January", "Febr

})






}