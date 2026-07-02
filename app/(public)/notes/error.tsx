"use client"

import styles from './error.module.css';

type Props = {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  return (
    <div className={styles.errorBlock}>
      <h2 className={styles.heading}>Failed to load notes</h2>
      <p className={styles.message}>{error.message}</p>
      <button className={styles.retryButton} onClick={reset}>
        Try again
      </button>
    </div>
  )
}

export default Error;