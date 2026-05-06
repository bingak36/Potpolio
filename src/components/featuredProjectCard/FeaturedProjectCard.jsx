import React from 'react'
import styles from './FeaturedProjectCard.module.scss'
import { icons } from '../../utils/icons'
import Tag from '../../components/tag/Tag'
const GRADIENT = {
  violet: styles.gradient_violet,
  emerald: styles.gradient_emerald,
  sunset: styles.gradient_sunset,
  sky: styles.gradient_sky,
  ember: styles.gradient_ember,
  rose: styles.gradient_rose,
}
const META_ICONS = {
  stack: icons.stack,
  calendar: icons.calendar,
  github: icons.github,
  external: icons.external,
  code: icons.code
}

const IconStar = icons.star
const IconExternal = icons.external
const IconGithub = icons.github

const FeaturedProjectCard = ({
  title,
  description,
  tags = [],
  gradient = 'violet',
  status,
  meta = [],
  demoHref = '#',
  codeHref = '#',
  demoLabel = 'Live demo'
}) => {

  const gradientClass = GRADIENT[gradient] ?? GRADIENT.violet

  return (
    <article className={styles.card}>
      <div className={`${styles.visual} ${gradientClass}`} aria-hidden>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.mockContent} />
      </div>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.tags}>
            {tags.map(({ label, variant }) => (
              <Tag variant={variant} key={label}>
                {label}
              </Tag>
            ))}
          </div>
          {status ? (
            <span
              className={`${styles.status} ${status.type == 'live' ? styles.status_live : styles.status_featured}`}
            >
              {status.type == 'live' ? <span className={styles.statusDot} aria-hidden /> : null}
              {status.label}
            </span>
          ) : null}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        {meta.length > 0 ? (
          <div className={styles.meta}>
            {meta.map(({ type, text }) => {
              const MetaIcon = META_ICONS[type] ?? IconStar

              return (
                <span key={`${type}-${text}`} className={styles.metaItem}>
                  <span className={styles.metaIcon}>
                    <MetaIcon />
                  </span>
                  {text}
                </span>
              )
            })}
          </div>
        ) : null}

        <div className={styles.actions}>
          <a href={demoHref} className={`btn btn__primary ${styles.btnPrimary}`}>
            <IconExternal/>
            {demoLabel}
          </a>
          <a href={demoHref} className={`btn btn__outline ${styles.btnOutline}`}>
            <IconGithub/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProjectCard
