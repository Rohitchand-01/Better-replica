'use client';
import styles from '../Hero/Hero.module.scss'
import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {

  const navigate = (url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  }
  const handleClick = () => {
    navigate('/start');
  }

  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_text}>
          The first <br />
          <span className={styles.gradient_text}>AI-powered </span> Mortgage
        </h1>
      </div>
      <div className={styles.sub_content}>
        <p className={styles.sub_text}>
          Our tech unlocks lower rates, higher chances of approval,
        </p>
        <p className={styles.sub_text}>
          and a lightning-fast process from approval to closing. Over $100 billion funded.
        </p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.cta_button} onClick={handleClick}>
          Start my pre-approval
        </button>
      </div>
      <div className={styles.hero_image_container}>
        <Image
          src="/ai-powered-fico.webp"
          alt="AI-powered mortgage visualization"
          width={500}
          height={500}
          className={styles.hero_image}
          priority
        />
      </div>
    </div>
  )
}

export default Hero
