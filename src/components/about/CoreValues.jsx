import React from 'react'
import styles from '../../pages/about/About.module.scss'

const CoreValues = ({ icons, coreValues }) => {
  const IconHeart = icons.heart
  return (
    <article className={styles.card} aria-labelledby='values-title'>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <IconHeart />
        </span>
        <div>
          <h2 id='values-title' className={styles.cardTitle}>
            Core values
          </h2>
          <p className={styles.cardSubtitle}>
            Principles I optimize for
          </p>
        </div>
      </div>
      <div className={styles.valuesGrid}>
        {coreValues.map((item) => {
          const IconComponent = item.Icon

          return (
            <div
              className={styles.valueCard}
              key={item.title}>
              <div className={styles.valueIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.valueTitle}>{item.title}</h3>
              <p className={styles.valueDesc}>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default CoreValues
