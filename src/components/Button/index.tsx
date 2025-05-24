import type { ComponentProps } from 'react'
import styles from './index.module.css'

interface ButtonProps extends ComponentProps<'button'> {
  customClass?: string
}
export function Button({ customClass, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button_invite} ${
        customClass && styles[customClass]
      }`}
      type='button'
    />
  )
}
