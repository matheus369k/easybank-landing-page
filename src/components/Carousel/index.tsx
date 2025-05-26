'use client'

import Carousel, { CarouselProps } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export function CarouselContainer({
  children,
  ...props
}: Omit<CarouselProps, 'responsive'>) {
  return (
    <Carousel
      {...props}
      minimumTouchDrag={80}
      ssr={true}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1224 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1224, min: 949 },
          items: 3,
        },
        miniTablet: {
          breakpoint: { max: 949, min: 649 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 649, min: 300 },
          items: 1,
        },
      }}
    >
      {children}
    </Carousel>
  )
}
