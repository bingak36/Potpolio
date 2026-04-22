import React from 'react'
import styles from './Tag.module.scss'
const VARIANT={
  success :styles.variant_success,
  info :styles.variant_info,
  warning :styles.variant_warning,
  neutral :styles.variant_neutral,
}


const Tag = ({
  children, variant = 'neutral'
}) => {
  return (
    <span className={`${styles.tag} ${VARIANT[variant]} ?? VARIANT.neutral`}>
      {children}
    </span>
  )
}

export default Tag