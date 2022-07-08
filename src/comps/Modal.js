 import React from "react";
import { motion } from "framer-motion";
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum";
import ContactBtn from "./ContactBtn";

const Modal = ({ setSelectedImg, selectedStorie }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {



      setSelectedImg(null);
    }
  };

  return (
    <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="modal__content">
        <motion.img src={selectedStorie.imgUrl} alt="enlarged pic" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        {/* <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} /> */}
        <div className='storie__content'>{selectedStorie.storieText}</div>
        
        <ContactBtn />
      </div>
    </motion.div>
  );
};

export default Modal;
