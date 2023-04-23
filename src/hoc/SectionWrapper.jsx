import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper= (Component, idName)=> 
function HOC(){
    return(
        <motion.section 
        variants={staggerContainer} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{ once:true, amount: 0.25}} 
        className={`${styles.padding} max-w-7xl mx-auto relative z-5`}
        >
            <span className="hash-span w-5 h-5 z-0" id={idName}  >
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper 