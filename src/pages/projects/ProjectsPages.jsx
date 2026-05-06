import React, { useMemo, useState } from 'react'
import styles from './ProjectsPages.module.scss'
import FeaturedProjectCard from '../../components/featuredProjectCard/FeaturedProjectCard'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { projectFilters, projectsPageItems } from '../../utils/projectsPageData'
import { projectItemMotion, projectItemTransition } from '../../utils/aniValue'
const ProjectsPages = () => {

  const [filter, setFilter] = useState('all')

  const shouldReduceMotion = useReducedMotion()

  const visible = useMemo(() => {

    if (filter == 'all') return projectsPageItems

    return projectsPageItems.filter((p) => p.categories.includes(filter))

  }, [filter])

  return (
    <div className={styles.project_section}>
      <div className="inner">
        <header className={styles.hero}>
          <span
            className="badge badge__primary badge__center"
          >Featured work</span>
          <h1 className={styles.title}>Projects I&apos;m proud of</h1>
          <p className={styles.lead}>
            From shipped products to open-source experiments <br /> — a sample of things I enjoyed building end to end.
          </p>
        </header>
        <div className={styles.filters} role='tablist' aria-label='Filter projects by category'>
          {projectFilters.map(({ id, label }) => (
            <button
              key={id}
              type='button'
              role='tab'
              aria-selected={filter === id}
              onClick={() => setFilter(id)}
              className={`${styles.filterBtn} ${filter == id ? styles.filterBtnActive : ''}`}
            >{label}</button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p>No project in this category yet</p>
        ) : (
          <div className={styles.grid}>
            {visible.map((project, index) => (
              <Motion.div
                layout={!shouldReduceMotion}
                {...projectItemMotion}
                transition={
                  projectItemMotion ? { ...projectItemTransition, delay: index * 0.05 } : undefined
                }
                key={project.id}>

                <FeaturedProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  gradient={project.gradient}
                  status={project.status}
                  meta={project.meta}
                  demoHref={project.demoHref}
                  codeHref={project.codeHref}
                  demoLabel={project.demoLabel}
                />
              </Motion.div>

            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPages
