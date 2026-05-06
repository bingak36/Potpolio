import React from 'react'
import styles from '../../pages/about/About.module.scss'
const CareerTimeline = ({ icons, timeline }) => {
  const IconBriefcase = icons.briefcase
  return (
    <article
      aria-labelledby='timeline-title'
      className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={`${styles.cardIcon} ${styles.timelineCardIcon}`}>
          <IconBriefcase />
        </span>

        <div>
          <h2 id='timeline-title' className={styles.cardTitle}>
            Career timeline
          </h2>
          <p className={styles.cardSubtitle}>
            Selected roles
          </p>
        </div>
      </div>
      <ul className={styles.timeline}>
        {timeline.map((item) => (
          <li
            className={styles.timelineItem}
            key={item.range}
            style={{ '--dot': item.dot, '--company': item.companyColor }}
          >
            <span className={styles.rangePill}>{item.range}</span>
            <h3 className={styles.jobTitle}>{item.title}</h3>
            <p className={styles.company}>{item.company}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default CareerTimeline
