import Image from 'next/image'
import styles from './index.module.css'
import LogoIcon from '@/assets/logo-dark.svg'
import InstagramIcon from '@/assets/icon-instagram.svg'
import FacebookIcon from '@/assets/icon-facebook.svg'
import TwitterIcon from '@/assets/icon-twitter.svg'
import YoutubeIcon from '@/assets/icon-youtube.svg'
import PinterestIcon from '@/assets/icon-pinterest.svg'
import { Button } from '../Button'
import { ScrollAnimationContainers } from '@/libs/motion'

export function Footer() {
  return (
    <footer className={styles.footer_container}>
      <ScrollAnimationContainers className={styles.footer__icons_container}>
        <Image
          src={LogoIcon}
          alt='this icon have three bar green and write after easybank'
        />

        <div className={styles.footer__social_icons_container}>
          <Image src={FacebookIcon} alt='this icon show letter F' />
          <Image
            src={YoutubeIcon}
            alt='this icon show one square with border rounded with button triangular at your center'
          />
          <Image src={TwitterIcon} alt='this icon show one shadow of bird' />
          <Image
            src={PinterestIcon}
            alt='this icon show one letter P of your center'
          />
          <Image
            src={InstagramIcon}
            alt='this icon show one square with rounded border and one circle at your center'
          />
        </div>
      </ScrollAnimationContainers>

      <ScrollAnimationContainers>
        <nav className={styles.footer__navbar_container}>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </ScrollAnimationContainers>

      <ScrollAnimationContainers
        className={styles.footer__quick_access_container}
      >
        <Button customClass='footer_container'>Request Invite</Button>
        <p className={styles.footer__quick_access__message}>
          © Easybank. All Rights Reserved
        </p>
      </ScrollAnimationContainers>
    </footer>
  )
}
