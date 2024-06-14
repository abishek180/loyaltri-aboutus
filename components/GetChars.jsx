import { motion } from "framer-motion"
import { slideUp } from "@/utils/anim"
import { cn } from "@/utils/cn"

export const GetChars = ({ word, isInView, className }) => {
  return (
    <p className={cn("m-0", className)}>
      {word.split("").map((char, index) => {
        return (
          <span key={index} className="relative overflow-hidden inline-flex">
            <motion.span
              variants={slideUp}
              custom={index}
              animate={isInView ? "open" : "closed"}
              key={index}
            >
              {char}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}
