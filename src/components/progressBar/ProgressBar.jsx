import React from "react";
import styles from "./ProgressBar.module.scss";
const ACCENT = {
  primary: styles.accent_primary,
  success: styles.accent_success,
  info: styles.accent_info,
  warning: styles.accent_warning,
};

const ProgressBar = ({ label, percent, accent = "primary" }) => {
  const safe = Math.min(100, Math.max(0, percent));

  const accentClass = ACCENT[accent] ?? ACCENT.primary;

  return (
    <div className={styles.wrap}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.pct}>{safe}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${accentClass}`}
          style={{ width: `${safe}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
