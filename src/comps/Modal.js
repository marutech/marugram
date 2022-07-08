import React from "react";
import { motion } from "framer-motion";
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum";
import ContactBtn from "./ContactBtn";
import CloseBtn from "./CloseBtn";

const Modal = ({ setSelectedImg, selectedStorie }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CloseBtn onClose={() => setSelectedImg(null)} />

      <div className="modal__content">
        <motion.img src={selectedStorie.imgUrl} alt="enlarged pic" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        {/* <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} /> */}
        <span
          dangerouslySetInnerHTML={{ __html: selectedStorie.storieText.replace(/(\r\n|\n|\r)/gm, "<br>") }}
          className="storie__content"
        ></span>
        <ContactBtn />
      </div>
    </motion.div>
  );
};

export default Modal;
