import React, { useState } from "react";
import { NewTitle, ReactStories, UploadBtns, ImageGrid, Modal, Header } from "./comps";

function App() {
  const [selectedStorie, setSelectedStorie] = useState(null);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  return (
    <>
      {isStoriesOpen ? (
        <ReactStories onCloseStories={() => setIsStoriesOpen(false)} />
      ) : (
        <>
          <Header />
          <div className="app__container">
            <NewTitle onAvatarClick={() => setIsStoriesOpen(true)} />
            { <UploadBtns /> }
            <ImageGrid setSelectedImg={setSelectedStorie} />
            {selectedStorie && <Modal selectedStorie={selectedStorie} setSelectedImg={setSelectedStorie} />}
          </div>
        </>
      )}
    </>
  );
}

export default App;
