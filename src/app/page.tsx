import styles from './page.module.css';
import UsageSec from '@/components/UsageSec';
import DetailUsageSec from '@/components/DetailUsageSec';
import Top10Area from '@/components/Top10Area';
import StartEntry from '@/components/StartEntry';
import { getEmotionData, getOtherBtnsUsage } from '@/utlis/apis'




export default async function Home() {
  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']

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

  return (
    <div className={styles.main}>
      <UsageSec emotions={emotions} btns={btns}/>
      <DetailUsageSec />
      <Top10Area />
      <StartEntry />
    </div>
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
