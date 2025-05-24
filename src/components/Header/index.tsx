import Image from 'next/image'
import styles from './index.module.css'
import LogoIcon from '@/assets/logo-light.svg'
import { Navbar } from './Navbar'
import { Button } from '../Button'

export function Header() {
  return (
    <header className={styles.header_container}>
      <Image
        src={LogoIcon}
        alt='this icon have three bar green and write after easybank'
      />
      <Navbar />
      <Button customClass='header_container'>Request Invite</Button>
    </header>
  )
}
