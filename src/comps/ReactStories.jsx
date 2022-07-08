import React, { useRef } from "react";
import useFirestore from "../hooks/useFirestore";
import Stories from "react-insta-stories";
import "../css/stories.css";

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
          <button className="stories__button" onClick={onCloseStories}>
            <svg
              aria-label="Закрыть"
              color="#ffffff"
              fill="#ffffff"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polyline
                fill="none"
                points="20.643 3.357 12 12 3.353 20.647"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              ></polyline>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                x1="20.649"
                x2="3.354"
                y1="20.649"
                y2="3.354"
              ></line>
            </svg>
          </button>
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
