import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { storiesArray } from "../fixtures/storiesArray";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {storiesArray &&
        storiesArray.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc)}
          >
            <motion.img
              src={doc.imgUrl}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
