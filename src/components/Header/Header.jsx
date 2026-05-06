import React, { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion as Motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const [mounted, setMounted] = useState(false)
  const panelId = useId()

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width:900px)')

    const handleMediaChange = () => {
      if (mq.matches) {
        closeMenu()
      }
    }

    mq.addEventListener('change', handleMediaChange)

    return () => {
      mq.removeEventListener('change', handleMediaChange)
    }

  }, [closeMenu])


  useEffect(() => {

    if (!menuOpen) return

    const handleKeyDown = (e) => {
      if (e.key == 'Escape') {
        closeMenu()
      }
    }

    const previousOverflow = document.body.style.overflow

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }

  }, [menuOpen, closeMenu])

  return (
    <header key={pathname} className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} end onClick={closeMenu}>
          Your Name
        </NavLink>
        <nav className={styles.nav} aria-label='Main'>
          {navItems.map(({ to, label }) => (
            <Motion.div key={to} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>

              <NavLink
                to={to}
                key={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                {label}
              </NavLink>
            </Motion.div>
          ))}
        </nav>
        <div className={styles.actions}>
          <Motion.button

            whileTap={{ scale: 0.97 }}
            type='button'
            className={`btn btn__outline btn__small ${styles.btn__small}`}>
            Resume
          </Motion.button>
          <Motion.button
            whileTap={{ scale: 0.97 }}

            type='button'
            className={`btn btn__primary btn__small ${styles.btn__small}`}>
            Hire me
          </Motion.button>
          <Motion.button
            whileTap={{ scale: 0.97 }}

            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
          >
            {theme == 'dark' ? 'L' : 'D'}
          </Motion.button>
          <button
          type='button'
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={menuOpen? panelId :undefined}
          aria-label={menuOpen? 'Close menu':'Open menu'}
          onClick={()=>setMenuOpen((prev)=>!prev)}
          >

            <span className={styles.menuIcon} aria-hidden>
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
            </span>
          </button>
        </div>
      </div>
      {mounted &&
        menuOpen &&
        createPortal(
          <>
            <button
              type='button'
              className={styles.mobileBackdrop}
              aria-label='Close menu'
              tabIndex={-1}
              onClick={closeMenu}
            />
            <div
              id={panelId}
              className={styles.mobilePanel}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <nav className={styles.mobileNav} aria-label='Main'>
                {navItems.map(({ to, label }) => (


                  <NavLink
                    to={to}
                    key={to}
                    className={({ isActive }) =>
                      isActive ? `${styles.linkMobile} ${styles.linkMobileActive}` : styles.linkMobile
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>

                ))}
              </nav>
              <div className={styles.mobileActions}>
                <button

                  type='button'
                  className={styles.btnMobileOutline}
                >
                  Resume
                </button>
                <button
                  whileTap={{ scale: 0.97 }}
                  className={styles.btnMobilePrimary}
                  type='button'
                >
                  Hire me
                </button>
                <button
                  whileTap={{ scale: 0.97 }}

                  className={styles.themeToggleMobile}
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
                >
                  {theme == 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              </div>
            </div>
          </>,
          document.body
        )
      }
    </header>
  )
}

export default Header