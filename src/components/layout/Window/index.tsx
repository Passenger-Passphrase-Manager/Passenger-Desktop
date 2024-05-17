import classNames from "classnames"
import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface IWindowProps {
  className?: string
  children: ReactNode
}

const Window: FC<IWindowProps> = ({ children, className }) => {
  return <motion.main
    initial="initial"
    animate="in"
    exit="out"
    variants={{
      initial: {
        opacity: 0,
        scale: 0.9
      },
      in: {
        opacity: 1,
        scale: 1
      },
      out: {
        opacity: 0,
        scale: 0.9
      }
    }}
    transition={{
      type: "spring",
      ease: "anticipate",
      duration: 0.25
    }}
    className={classNames({
      "grow overflow-y-auto p-2 md:p-4": true,
      [className as string]: className
    })}
  >
    {children}
  </motion.main>
}

export default Window