import React, { useRef } from "react";
import useFirestore from "../hooks/useFirestore";
import Stories from "react-insta-stories";
import "../css/stories.css";
import CloseBtn from "./CloseBtn";

const ReactStories = ({ onCloseStories }) => {
  const { docs } = useFirestore("images");

  const storyContent = {
    position: "absolute",
    display: "block",
    height: "100%",
    top: 0,
    maxWidth: "unset",
    borderRadius: "8px",
    transform: "translateX(-24%)",
  };

  return (
    <>
      {!!docs.length && (
        <div className="stories__wrapper">
          <CloseBtn onClose={onCloseStories} />
          <div className="storie">
            <Stories
              storyStyles={storyContent}
              stories={docs.map((doc) => doc.url)}
              defaultInterval={2500}
              width={432}
              height={768}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReactStories;
