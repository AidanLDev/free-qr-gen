'use client'

import React from 'react'
import Image from 'next/image'
import styles from './BuyMeACoffeeButton.module.css'

export default function BuyMeACoffeeButton() {
  const handleClick = () => {
    window.open('https://www.buymeacoffee.com/AidanL94', '_blank')
  }

  return (
    <button className={styles.bmcButton} onClick={handleClick}>
      <Image
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
        width={24}
        height={24}
        unoptimized
      />
      <span>Buy me a coffee</span>
    </button>
  )
}
