import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>
                  {skill.title}
                </p>
              </div>
            ))
          }
        </div>
        <ul className={styles.history}>
          {
            history.map((hisItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(hisItem.imageSrc)} alt={`${hisItem.organisation}`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${hisItem.role}, ${hisItem.organisation}`}</h3>
                  <p>{`${hisItem.startDate} ${hisItem.endDate}`}</p>
                  <ul>{hisItem.experiences.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}</ul>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Experience