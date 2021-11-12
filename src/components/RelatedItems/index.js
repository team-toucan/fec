import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
import Outfit from "./Outfit.jsx";
import { getRelatedProductsById } from "../../api";
import { getProductById, getProductStyleById } from "../../api";
const RelatedItems = () => {
  const { id } = useParams();
  const [relatedArr, updateRelated] = useState([]);
  const [currentitemID, updateCurrent] = useState(id);

  useEffect(() => {
    const getrelateditems = async () => {
      const relatedResponse = await getRelatedProductsById(id);
      const relatedinfo = relatedResponse.data;
      updateRelated(relatedinfo);
    };
    getrelateditems();
  }, []);

  const ref = useRef();
  const divRef = React.useRef();

  const scroll = (scrollOffset) => {
    divRef.current.scrollLeft += scrollOffset;
  };

  return (
    //For each id in relatedArr, pass to the Card component along with
    //the id of the current item

    <div
      className="slide-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button className="prev" onClick={() => scroll(-50)}>
        go left
      </button>
      <button className="prev" onClick={() => scroll(50)}>
        go right
      </button>

      <div className="items-container" ref={divRef} style={{ display: "flex" }}>
        {relatedArr.map((item, i) => (
          <div
            className="single-item-container"
            style={{
              border: "1px solid blue",
              display: "flex",
              overflow: "hidden",
              height: "250px",
              width: "140px",
              margin: "4px",
            }}
          >
            <Card relatedId={item} currentItemID={parseInt(currentitemID)} />
          </div>
        ))}
      </div>
      <div classname="slide-container" style={{ display: "flex" }}>
        <Outfit currentitemID={currentitemID} />
      </div>
    </div>
  );
};

export default RelatedItems;
