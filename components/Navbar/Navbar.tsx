'use client'
import styles from '../Navbar/Navbar.module.scss'
import { Phone, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import React from 'react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero')
      if (!heroElement) return

      const heroBottom = heroElement.offsetTop + heroElement.offsetHeight
      const scrollPosition = window.scrollY + 100

      setIsScrolled(scrollPosition >= heroBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.left_container}>
        <div className={styles.logo}>
          <div className={styles.logo_text}>Better</div>
        </div>
        <div className={`${styles.action_container} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.action}>
            <button className={styles.button}>Buy</button>
          </div>
          <div className={styles.action}>
            <button className={styles.button}>Refinance</button>
          </div>
          <div className={styles.action}>
            <button className={styles.button}>HELOC</button>
          </div>
          <div className={styles.action}>
            <button className={styles.button}>Rates</button>
          </div>
          <div className={styles.action}>
            <button className={styles.button}>Better+</button>
          </div>
        </div>
      </div>

      <div className={styles.signin_container}>
        <div className={styles.contact}>
          <button className={styles.contact_button}>
            <Phone className={styles.phone_icon} />
          </button>
        </div>
        <div className={styles.signin}>
          <button className={styles.button}>Sign In</button>
        </div>
        <div className={styles.mobile_menu_toggle}>
          <button className={styles.menu_button} onClick={toggleMenu}>
            {isMenuOpen ? <X className={styles.menu_icon} /> : <Menu className={styles.menu_icon} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar