import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Page.module.scss'
const PlaceholderPage = ({
    title,
    desc = '이 페이지는 곧 추가될 콘텐츠를 위한 자리입니다.'
}) => {
    return (
        <section className={styles.page}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lead}>{desc}</p>
            <Link to="/" className={styles.back}>  ← back to home</Link>
        </section>
    )
}

export default PlaceholderPage