import React from 'react'
import styles from './CategoryCard.module.scss'
import ProgressBar from '../progressBar/ProgressBar'
const CategoryCard = ({
    title,
    subtitle,
    accent = 'primary',
    skills = [],
    progress = 1,
    tags = [],
    icon,
    iconColor

}) => {
    return (
        <article
            style={iconColor ? { ['--icon-color']: iconColor } : undefined}
            className={styles.card}
        >
            <div className={styles.head}>
                {icon ? <div className={styles.iconWrap}>{icon}</div> : null}
                <div className={styles.headText}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    {subtitle? <p className={styles.subtitle}>{subtitle}</p>:null}
                </div>
            </div>
            <div className={styles.list}>
                {skills.map(({ name, percent, showPercent }) => (
                    <ProgressBar
                        key={name}
                        label={name}
                        percent={percent}
                        accent={accent}
                        progress={progress}
                        showPercent={showPercent !== false}
                    />
                ))}
            </div>

            {tags.length > 0 ? (
                <div className={styles.tagRow}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tagChip}>
                            {tag}
                        </span>
                    ))}
                </div>
            ) : null}
        </article>
    )
}

export default CategoryCard