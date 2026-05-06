import React, { useRef } from 'react'
import styles from './Tools.module.scss'
import CategoryCard from '../categoryCard/CategoryCard'
import { categories } from '../../utils/categories'
import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'
const Tools = () => {

    const sectionRef = useRef(null)

    const shouldReduceMotion = useReducedMotion()

    const revealBars = useInView(sectionRef, {
        margin: '-42% 0px -42% 0px'
    })

    const progress = shouldReduceMotion ? 1 : (revealBars ? 1 : 0)
    return (
        <section ref={sectionRef} className={styles.tools} aria-labelledby='tech-heading'>
            <div className={`inner ${styles.inner}`}>
                <h1 className="tit tit__m">
                    Tools I work with
                </h1>
                <div className={styles.grid}>

                    {categories.map((cat, i) => (
                        <Motion.div
                            key={i}
                            initial={
                                shouldReduceMotion ? false
                                    : { opacity: 0, y: 20 }
                            }
                            whileInView={
                                shouldReduceMotion ? {}
                                    : { opacity: 1, y: 0 }
                            }
                            viewport={{
                                once:true,amount:0.4
                            }}
                            transition={{
                                duration:shouldReduceMotion?0:0.45,
                                delay:shouldReduceMotion?0:i*0.06,
                                ease:[0.22,1,0.36,1]
                            }}
                        >

                            <CategoryCard
                                title={cat.title}
                                accent={cat.accent}
                                skills={cat.skills}
                                progress={progress}
                            />
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tools