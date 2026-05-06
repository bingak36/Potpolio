import React from 'react'
import styles from './Page.module.scss'
import { Link } from 'react-router-dom'

const PlaceholderPage = ({
  title = 'Coming soon',
  desc = '이 페이지는 곧 추가될 콘텐츠를 위한 자리입니다.'
}) => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{desc}</p>
      <Link to='/' className={styles.back}>← Back to home</Link>
    </div>
  )
}

export default PlaceholderPage
