import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactBtn from "./ContactBtn";
import CloseBtn from "./CloseBtn";

const Modal = ({ setSelectedImg, selectedStorie }) => {
  const [isPaused, setIsPaused] = useState(true);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const videoRef = useRef(null);

  const onPlayStop = () => {
    console.log(videoRef.current);
    setIsPaused(!isPaused);
    isPaused ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CloseBtn onClose={() => setSelectedImg(null)} />
      <div className="modal__content">
        {selectedStorie.type === "image" ? (
          <motion.img src={selectedStorie.imgUrl} alt="enlarged pic" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        ) : (
          <div onClick={onPlayStop} className={`storie__video ${isPaused ? "storie__video_paused" : ""}`}>
            <motion.video loop ref={videoRef} src={selectedStorie.videoUrl}></motion.video>
          </div>
        )}
        <span
          dangerouslySetInnerHTML={{ __html: selectedStorie.storieText.replace(/(\r\n|\n|\r)/gm, "<br>") }}
          className="storie__text"
        ></span>
        <ContactBtn />
      </div>
    </motion.div>
  );
};

export default Modal;
