import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {useMemo} from 'react'

export function Title({children}: {children: string}) {
  const text = new Array(20).fill(children).join(' ')
  const {scrollY} = useScroll()
  const translateX = useSpring(useTransform(() => scrollY.get() * -1 * 0.5))

  return (
    <motion.div
      className="text-9xl text-neutral-50 whitespace-nowrap -ml-10"
      style={{translateX}}
    >
      {text}
    </motion.div>
  )
}
