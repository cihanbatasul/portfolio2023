import { easeIn, motion } from "framer-motion"
import { SetStateAction, Dispatch, useEffect } from "react"
type Props = {
  stateAction: Dispatch<SetStateAction<boolean>>
}

const AnimatedParagraph = ({stateAction}: Props) => {
    const word = "welcome".toUpperCase()
    const wordArray: string[] =[]
    for(const i of word) {
      wordArray.push(i)
  }
  
  
    setTimeout(() => {
      stateAction(true)
    }, 1500);
 

  return (
    <motion.div 
    className={`flex flex-row justify-center font-cabinetBold text-[#393632]  text-7xl md:text-9xl  uppercase font-extrabold w-full md:max-w-7xl pt-16  `}>
     {wordArray.map((char) => (
 <motion.div 
 initial={{ scale: (char === 'e' || char === 'o') ? 6 : 1.2 }}
 animate={{scale: 1}}
 transition={{duration: 0.7, ease: easeIn}}
  >{char}</motion.div> 
     ))}
     
    </motion.div>
  )
}

export default AnimatedParagraph