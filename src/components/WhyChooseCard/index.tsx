import type { ComponentProps } from 'react'
import styles from './index.module.css'
import { ScrollAnimationCards } from '@/libs/motion'

export function WhyChooseCardRoot({ ...props }: ComponentProps<'div'>) {
  return (
    <ScrollAnimationCards {...props} className={styles.choose_card_container} />
  )
}

export function WhyChooseCardAuthor({ ...props }: ComponentProps<'span'>) {
  return <span {...props} className={styles.choose_card_author} />
}

export function WhyChooseCardTitle({ ...props }: ComponentProps<'h3'>) {
  return <h3 {...props} className={styles.choose_card_title} />
}

export function WhyChooseCardDescription({ ...props }: ComponentProps<'p'>) {
  return <p {...props} className={styles.choose_card_description} />
}
