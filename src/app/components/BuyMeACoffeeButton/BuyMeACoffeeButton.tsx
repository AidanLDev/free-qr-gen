'use client'

import React from 'react'
import styles from './BuyMeACoffeeButton.module.css'

export default function BuyMeACoffeeButton() {
  const handleClick = () => {
    window.open('https://www.buymeacoffee.com/AidanL94', '_blank')
  }

  return (
    <button className={styles.bmcButton} onClick={handleClick}>
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </button>
  )
}
