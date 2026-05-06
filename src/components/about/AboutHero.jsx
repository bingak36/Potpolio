import React from 'react'
import styles from '../../pages/about/About.module.scss'
import { motion as Motion } from 'framer-motion'
const AboutHero = ({ icons, motionProps }) => {

    const IconMail = icons.mail
    const IconPin = icons.pin
    const IconDownload = icons.download
    const IconGithub = icons.github
    return (
        <Motion.section className={styles.hero} aria-labelledby='about-hero-heading'>
            <div className={styles.heroContent}>
                <span className={styles.badge}>
                    <span className={styles.badgeDot} aria-hidden />
                    Open to opportunities
                </span>
                <p className={styles.eyebrow}>Hello, I&apos;m</p>
                <h1 id='about-hero-heading' className={styles.title}>
                    Your name
                </h1>
                <p className={styles.lead}>
                    Full-stack engineer focused on fast, accessible web experiences. I enjoy turning ambiguous product goals into
                    maintainable systems, clear UI, and measurable outcomes.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>
                        <span className={styles.metaIcon}>
                            <IconMail />
                        </span>
                        hello@name.dev
                    </span>
                    <span className={styles.meta}>
                        <span className={styles.metaIcon}>
                            <IconPin />
                        </span>
                        Remote
                    </span>

                </div>
                <div className={styles.ctaRow}>
                    <a href="#" className="btn btn__primary">
                        <IconDownload />
                        Download resume
                    </a>
                    <a href="#" className="btn btn__outline">
                        <IconGithub />
                        View Github
                    </a>
                </div>
            </div>
            <div className={styles.heroVisual}>
                <div className={styles.profileCard}>
                    <div className={styles.profilePlaceholder}/>
                </div>
                <div className={styles.statPills}>
                    <span className={styles.statPill}>5+ years experience</span>
                    <span className={styles.statPill}>40+ project</span>
                    <span className={styles.statPill}>Freelance friendly</span>

                </div>
            </div>
        </Motion.section>
    )
}

export default AboutHero