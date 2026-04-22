import React from 'react'
import styles from './Tools.module.scss'
import CategoryCard from '../categoryCard/CategoryCard'
import { categories } from '../../utils/categories'
const Tools = () => {
    return (
        <section className={styles.tools} aria-labelledby='tech-heading'>
            <div className={`inner ${styles.inner}`}>
                <h1 className="tit tit__m">
                    Tools I work with
                </h1>
                <div className={styles.grid}>

                    {categories.map((cat, i) => (

                        <CategoryCard
                            key={i}
                            title={cat.title}
                            accent={cat.accent}
                            skills={cat.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tools