import React from 'react'
import styles from './Stats.module.scss'

const items =[
  { label: 'Years experience', value: '—' },
  { label: 'Projects built', value: '—' },
  { label: 'Happy clients', value: '—' },
]

const Stats = () => {
  return (
    <ul className={styles.stats}>
        {items.map(({label,value})=>(
            <li key={label} className={styles.item}>
                <span className={styles.value}>{value}</span>
                <span className={styles.label}>{label}</span>
            </li>
        ))}
    </ul>
  )
}

export default Stats