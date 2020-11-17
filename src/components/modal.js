import React, {useState} from 'react';
import { motion } from 'framer-motion';

export const Modal = ({ images, setSelectedImg, selectedImg, index }) => {
  const [idex, setIndex] = useState(index);
  console.log(idex);
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(false);
    }
  }
  const nextImage = (e) => {
    if(idex != images.length-1)
    setIndex(idex+1)
  }
  const prevImage = (e) => {
    if(idex != 0){
      setIndex(idex-1)
    }  
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button className="left" onClick = {prevImage}>prev</motion.button>
      <motion.button className="right" onClick = {nextImage}>next</motion.button>
      <motion.img src={images[idex].urls.thumb} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: '20vh' }}
      />
    
    </motion.div>
  )
}
