import type { ComponentProps } from 'react'
import styles from './index.module.css'
import Image, { type ImageProps } from 'next/image'
import { ScrollAnimationCards } from '@/libs/motion'

export function ArticlesCardRoot({ ...props }: ComponentProps<'div'>) {
  return (
    <ScrollAnimationCards
      {...props}
      className={styles.article_card_container}
    />
  )
}

export function ArticlesCardImage({ ...props }: ImageProps) {
  return (
    <div className={styles.article_card_picture}>
      <Image {...props} className={styles.article_card_image} />
    </div>
  )
}

export function ArticlesCardContent({ ...props }: ComponentProps<'div'>) {
  return <div {...props} className={styles.article_card_content} />
}

export function ArticlesCardTitle({ ...props }: ComponentProps<'h3'>) {
  return <h3 {...props} className={styles.article_card_title} />
}

export function ArticlesCardDescription({ ...props }: ComponentProps<'p'>) {
  return <p {...props} className={styles.article_card_description} />
}
