import styles from './UsageSec.module.css'
import SectionBox from './SectionBox'
import { getEmotionData, getOtherBtnsUsage } from '@/utlis/apis'

export default function UsageSec() {
  const emBtns = ['veryHappy', 'happy', 'neutral', 'sad', 'worst']
  const otherBtns = ['plusBtn', 'dark', 'light', 'deleteAllEntries', 'story', 'photo']

  const fetchData = async () => {
    // 'emotion' 및 'btns' 데이터를 비동기적으로 불러옵니다.
    const emotions = await Promise.all(
      emBtns.map(async (item: string) => {
        const emotion = await getEmotionData()
        console.log(emotion,'emotion')
        return { item, emotion }
      })
    )

    const btnsData = await Promise.all(
      otherBtns.map(async (item: string) => {
        const btns = await getOtherBtnsUsage(item)
        return { item, btns }
      })
    )

    return { emotions, btnsData }
  }

  const renderSection = async () => {
    const { emotions, btnsData } = await fetchData()

    return (
      <>
        <div className={styles.page}>
          <div className={styles.usageTitle}>
            <h2>USAGE</h2>
          </div>

          <div className={styles.emBtns}>
            {emotions.map(({ item, emotion }) => {
              if (!emotion || emotion[item] === undefined) {
                return null // emotion[item]이 존재하지 않으면 해당 버튼을 렌더링하지 않습니다
              }
              return (
                <SectionBox
                  key={item}
                  title={item.toUpperCase()}
                  data={emotion[item]}
                  width={180}
                  height={100}
                />
              )
            })}
          </div>

          <div className={styles.otherBtns}>
            {btnsData.map(({ item, btns }) => {
              if (!btns || btns[item] === undefined) {
                return null // btns[item]이 존재하지 않으면 해당 버튼을 렌더링하지 않습니다
              }
              return (
                <SectionBox
                  key={item}
                  title={item.toUpperCase()}
                  data={btns[item]}
                  width={180}
                  height={100}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return renderSection()
}
