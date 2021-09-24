import React from 'react'
import {motion} from 'framer-motion'

function Modal({selectedImg , setSelectedImg}) {
    const handleClick= (event)=>{
        setSelectedImg(null)
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:1}}
        animate = {{opacity:3}}
        >
         <motion.img src={selectedImg} alt="enlarge image"
          initial={{y:"-100vh"}}
          animate={{y:0}}/>
        </motion.div>
    )
}
export default Modal;
