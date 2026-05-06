import React from 'react'
import styles from '../../pages/about/About.module.scss'
const AboutCard = ({ icons }) => {
  const IconUser = icons.user

  return (
    <article
      aria-labelledby='about-card-title'
      className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <IconUser />
        </span>

      <div>
        <h2 id='about-card-title' className={styles.cardTitle}>
          About me
        </h2>
        <p className={styles.cardSubtitle}>
          How I work
        </p>
      </div>
      </div>
      <div>
        <p className={styles.body}>
          I started as a curious builder who liked shipping small tools that solved real problems. Over time that turned
          into a career shipping production web apps: APIs, data modeling, front-end architecture, and the glue in between.
        </p>
        <p className={styles.body}>
          My default mindset is pragmatic: choose boring technology where it helps, invest complexity where it earns its
          keep, and keep interfaces honest — fast, accessible, and easy to reason about.
        </p>
      </div>
    </article>
  )
}

export default AboutCard
