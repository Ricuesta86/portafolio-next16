'use client'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export const StaggeredList = ({ children }: { children: React.ReactNode }) => (
  <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
    className="space-y-2"
  >
    {children}
  </motion.ul>
)

export const StaggeredItem = ({ children }: { children: React.ReactNode }) => (
  <motion.li variants={item}>
    {children}
  </motion.li>
)