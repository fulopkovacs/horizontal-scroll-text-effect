import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import React from 'react'

function StarSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 aspect-square"
      viewBox="0 0 242 242"
    >
      <g
        className="stroke-current"
        fill="none"
        fill-rule="evenodd"
        stroke-width="10"
      >
        <path d="M121.5 0v242M0 120.5h242M36 35l171 171M36 207 207 36" />
      </g>
    </svg>
  )
}

export function Title({children}: {children: string}) {
  const repeatNTimes = 20
  const {scrollY} = useScroll()
  const translateX = useSpring(useTransform(() => scrollY.get() * -1 * 0.5))

  return (
    <motion.div
      className="text-9xl text-neutral-50 whitespace-nowrap -ml-10 flex items-center gap-3"
      style={{translateX}}
    >
      {new Array(repeatNTimes).fill(1).map((_, i) => {
        if (i === repeatNTimes - 1) {
          return <div key={i}>{children}</div>
        }

        return (
          <React.Fragment key={i}>
            <div>{children}</div>
            <StarSeparator />
          </React.Fragment>
        )
      })}
    </motion.div>
  )
}
