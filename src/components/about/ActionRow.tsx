import BaseButton from "../utils/BaseButton"
import { motion, easeIn } from "framer-motion"

const ActionRow = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <motion.div
    initial={{ opacity: 0}} animate={{opacity: 1 }} transition={{duration: 1.5, ease: easeIn, delay: 1.2}}
    className="flex flex-col md:flex-row gap-3">
        <BaseButton  text="Let's work together" onClick={scrollToContact}/>
    </motion.div>
  )
}

export default ActionRow