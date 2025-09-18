import { motion } from 'framer-motion'

export const FadeIn = ({ as: Tag='div', delay=0, duration=0.5, y=12, children, className='' }) => {
  const Comp = motion[Tag] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export const Stagger = ({ children, interval=0.08, className='' }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: interval } },
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Item = ({ children }) => (
  <motion.div variants={{ hidden: { opacity:0, y:8 }, show: { opacity:1, y:0 } }}>{children}</motion.div>
)
