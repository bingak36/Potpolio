import React, { useEffect, useRef, useState } from 'react'
import styles from './ProgressBar.module.scss'
import { animate, motion as Motion, useReducedMotion } from 'framer-motion'
const ACCENT = {
    primary: styles.accent_primary,
    success: styles.accent_success,
    info: styles.accent_info,
    warning: styles.accent_warning
}

const ProgressBar = ({
    label,
    percent,
    accent = 'primary',
    progress = 1,
    showPercent = true
}) => {

    const prefersReducedMotion = useReducedMotion()

    const safe = Math.min(100, Math.max(0, percent))

    const accentClass = ACCENT[accent] ?? ACCENT.primary

    const progressRatio = Math.min(1, Math.max(0, progress))

    const end = Math.min(100, Math.max(0, safe * progressRatio))

    const targetDisplay = Math.round(end)

    const [displayPct, setDisplayPct] = useState(0)

    const displayRef = useRef(0)

    const pctLabel = prefersReducedMotion ? targetDisplay : displayPct

    useEffect(() => {

        if (prefersReducedMotion) return

        const start = displayRef.current

        if (start === targetDisplay) return

        const controls = animate(start, targetDisplay, {
            type: 'tween',
            duration: .6,
            ease: [.22, 1, .36, 1],
            onUpdate: (v) => {
                const n = Math.round(v)
                displayRef.current = n
                setDisplayPct(n)
            },
            onComplete: () => {
                displayRef.current = targetDisplay
                setDisplayPct(targetDisplay)
            }
        })

        return () => controls.stop()

    }, [targetDisplay, prefersReducedMotion])


    const fillTransition = prefersReducedMotion
        ? { type: 'tween', duration: 0 }
        : { type: 'spring', stiffness: 100, damping: 22, mass: .85 }

    return (
        <div className={styles.wrap}>
            <div className={styles.labelRow}>
                <span className={styles.label}>{label}</span>
                {showPercent ? (
                    <span className={styles.pct}>{pctLabel}%</span>
                ) : null}
            </div>
            <div className={styles.track}>
                <Motion.div
                    className={`${styles.fill} ${accentClass}`}
                    initial={prefersReducedMotion?false:{width:'0%'}}
                    animate={{width:`${end}%`}}
                    transition={fillTransition}
                />
            </div>
        </div>
    )
}

export default ProgressBar