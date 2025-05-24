'use client'

import Image from 'next/image'
import styles from './index.module.css'
import HamburgerIcon from '@/assets/icon-hamburger.svg'
import CloseIcon from '@/assets/icon-close.svg'
import { motion } from 'motion/react'
import { useState } from 'react'

export function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleToggleModal() {
    setIsOpenModal((state) => !state)
  }

  return (
    <nav className={styles.header__navbar}>
      <motion.button
        whileTap={{ opacity: 1, scale: 0.8 }}
        onClick={handleToggleModal}
      >
        {isOpenModal ? (
          <Image
            src={CloseIcon}
            alt="this icon looks letter X and it's to open menu"
          />
        ) : (
          <Image
            src={HamburgerIcon}
            alt="this icon looks hamburger and it's to close menu"
          />
        )}
      </motion.button>
      <ul data-modal-menu={isOpenModal}>
        <li className={styles.header__navbar__items}>Home</li>
        <li className={styles.header__navbar__items}>About</li>
        <li className={styles.header__navbar__items}>Contact</li>
        <li className={styles.header__navbar__items}>Blog</li>
        <li className={styles.header__navbar__items}>Careers</li>
      </ul>
    </nav>
  )
}
