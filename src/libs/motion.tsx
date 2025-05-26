'use client'

import { motion } from 'motion/react'
import type { ComponentProps } from 'react'

export function ScrollAnimationContainers({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <motion.div
      {...(className && { className })}
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollAnimationCards({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <motion.div
      {...(className && { className })}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}
