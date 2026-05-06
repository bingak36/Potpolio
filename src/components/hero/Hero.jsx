import React from 'react'
import styles from './Hero.module.scss'
import { motion as Motion, scale } from 'framer-motion'
import Stats from '../stats/Stats'

const contentVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .15,
            delayChildren: .3
        }
    }
}
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            ease: [.22, 1, .36, 1]
        }
    }
}
const visualVariants = {
    hidden: {
        opacity: 0,
        x: 40,
        scale: .96
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: .7,
            ease: [.22, 1, .36, 1],
            delay: .5
        }
    }
}

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby='hero-heading'>
            <div className={`inner ${styles.inner}`}>
                <Motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: .3 }}
                    className={styles.content}>
                    <Motion.span
                        variants={itemVariants}
                        className="badge badge__green">
                        Open to work
                    </Motion.span>
                    <Motion.h1
                        id='hero-heading'
                        variants={itemVariants}
                        className="tit">
                        Full-stack engineer building fast, accessible web apps.
                    </Motion.h1>
                    <Motion.p
                        variants={itemVariants}
                        className="txt">
                        Placeholder sub-headline — content will match the final design.
                    </Motion.p>
                    <Motion.div
                        variants={itemVariants}
                        className={styles.cta}>
                        <button type='button'
                            className='btn btn__primary'
                        >View project</button>
                        <button type='button'
                            className='btn btn__outline'
                        >Get in touch</button>
                    </Motion.div>
                    <Motion.div variants={itemVariants}>
                        <Stats />
                    </Motion.div>
                </Motion.div>
                <Motion.div
                    variants={visualVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: .3 }}
                    className={styles.visual} >
                    <div className={styles.imageFrame} />
                </Motion.div>
            </div>
        </section>
    )
}

export default Hero