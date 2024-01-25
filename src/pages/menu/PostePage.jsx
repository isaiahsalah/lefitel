import { useState } from "react";
import PosteSec from "./poste/PosteSec.";
import PosteDetalleComponent from "./poste/PosteDetalleSec";

const PostePage = () => {
  const [poste, setposte] = useState(null);

  return (
    <>
      {poste === null ? (
        <PosteSec setposte={setposte} />
      ) : (
        <PosteDetalleComponent setposte={setposte} poste={poste} />
      )}
    </>
  );
};

export default PostePage;
