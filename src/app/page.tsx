import styles from './page.module.css';
import UsageSec from '@/components/UsageSec';
import DetailUsageSec from '@/components/DetailUsageSec';
import Top10Area from '@/components/Top10Area';
import StartEntry from '@/components/StartEntry';
import {getMonthlyUsage, getEmotionData, getOtherBtnsUsage ,getStoryUsage,getPhotoUsage,getStartEnterUsagedByCountry,getUsageByArea, getCurrentMonthUsage} from '@/utlis/apis'
import RefreshButton from '@/components/RefreshButton';
import Head from 'next/head';
import { ShowMonthlysec } from '@/components/ShowMonthlysec';
import { generateMonthArray } from '@/utlis/toolFn';
export default async function Home() {
  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']
const items = ['story', 'photo'] ;
  const emotions: any = await Promise.all(
    emBtns.map(async (item) => {
      const emotion = await getEmotionData()
      return { item, emotion }
    })
  )

  const btns: any= await Promise.all(
    otherBtns.map(async (item) => {
      const btnData = await getOtherBtnsUsage(item)
      return { item, btnData }
    })
  )

  const newItemsData = await Promise.all(items.map(async (item) => {
    let data10:any;
    let data40:any; 
    let data70:any;

    if (item === 'story') {
      data10 = await getStoryUsage(10, 40)
      data40 = await getStoryUsage(40, 70)
      data70 = await getStoryUsage(70, 100)
    } else {
      data10 = await getPhotoUsage(1, 1)
      data40 = await getPhotoUsage(2, 2)
      data70 = await getPhotoUsage(3, 3)
    }


    return {
      item,
      data10: data10?.[item] ?? 0,
      data40: data40?.[item] ?? 0,
      data70: data70?.[item] ?? 0
    }
  }))
  const today = new Date();
  const toM = today.getMonth() + 1; // JavaScript에서 getMonth()는 0부터 시작하므로 +1 해줌
  const toY = today.getFullYear();
  
  // 5개월 전 계산
  let fromM = toM - 5;
  let fromY = toY;
  
  if (fromM <= 0) {
    fromM += 12; // 음수 방지: 이전 해의 월로 변환
    fromY -= 1;  // 전년도 처리
  }
  
  // 예시: fromM과 fromY를 출력해서 확인

  const data:any = await getStartEnterUsagedByCountry()
  const area:any =await getUsageByArea()
const currentMonthly= await getCurrentMonthUsage()
const eachMonth = await getMonthlyUsage({fromM,fromY,toM,toY})
const monthArr = generateMonthArray(fromM,fromY,toM,toY)

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className={styles.main}>
    <RefreshButton />
    <ShowMonthlysec result={eachMonth} monthArr={monthArr}/>
      <UsageSec emotions={emotions} btns={btns}/>
      <DetailUsageSec newItemsData ={newItemsData} />
      <Top10Area data={area}/>
      <StartEntry data={data}/>

    </div>
    </>
  );
}
//각기능 횟수 보여주는 박스 11개
//plusbtn -오늘 일기 버튼 사용량
// veryHappy-사용량x
// happy-사용량x
// neutral-사용량x
// sad-사용량x
// worst-사용량x
// 다크모디-사용량
// 라이트모드-사용량
// delete all entries-사용량
// storyinput -사용량x
// photo-사용량x

//지역별 사용 순위 보여주기

//story 분량별 횟수
//photo 분량별 횟수

//montly 사용량
