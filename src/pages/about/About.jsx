import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import AboutCard from '../../components/about/AboutCard'
import AboutHero from '../../components/about/AboutHero'
import AducationCard from '../../components/about/AducationCard'
import CareerTimeline from '../../components/about/CareerTimeline'
import CoreValues from '../../components/about/CoreValues'
import styles from './About.module.scss'
import { icons } from '../../utils/icons'
import { timeline, coreValues } from '../../utils/aboutContent'
const About = () => {

  const shouldReduceMotion = useReducedMotion()

  const motionProps = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .45, ease: [.22, 1, .36, 1] }
  }
  return (
    <div className={styles.about_page}>
      <div className={`inner ${styles.inner}`}>

        <AboutHero icons={icons} motionProps={motionProps} />
        <div className={styles.grid}>
          <div className={styles.column}>
            <AboutCard icons={icons} motionProps={motionProps} />
            <CoreValues icons={icons} coreValues={coreValues} motionProps={motionProps} />
          </div>
          <aside className={styles.column}>
            <CareerTimeline icons={icons} timeline={timeline} motionProps={motionProps} />
            <AducationCard icons={icons} motionProps={motionProps} />

          </aside>
        </div>
      </div>
    </div>
  )
}

export default About