import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`inner ${styles.inner}`}>
        <p className={styles.copy}>
          ©{year} yourname All rights reserved.
        </p>
        <nav className={styles.links} aria-label='Legal'>
          <Link to='/privacy'>Privacy</Link>
          <Link to='/terms'>Terms</Link>
          <Link to='/sitemap'>Sitemap</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer