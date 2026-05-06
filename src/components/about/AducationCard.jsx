import React from 'react'
import styles from '../../pages/about/About.module.scss'
const AducationCard = ({ icons }) => {

  const IconGraduation = icons.graduation
  return (
    <article aria-labelledby='edu-title'
          className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <IconGraduation />
        </span>
        <div>
          <h2 id='edu-title' className={styles.cardTitle}>
            Education
          </h2>
          <p className={styles.cardSubtitle}>
            Formal background
          </p>
        </div>
      </div>
      <div className={styles.eduRow}>
        <p className={styles.eduSchool}>Your University</p>
        <p className={styles.eduDegree}>Computer Science</p>
        <p className={styles.eduBadge}>2024-2026</p>
      </div>
    </article>
  )
}

export default AducationCard
