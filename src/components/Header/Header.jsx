import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} end>
          Your Name
        </NavLink>
        <nav className={styles.nav} aria-label='Main'>
          {navItems.map(({ to, label }) => (
            <NavLink
              to={to}
              key={to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <button type='button' className="btn btn__outline btn__small">
            Resume
          </button>
          <button type='button'  className="btn btn__primary btn__small">
            Hire me          
            </button>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
          >
            {theme == 'dark' ? 'L' : 'D'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header