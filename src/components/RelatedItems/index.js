import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
import Outfit from "./Outfit.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
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

  const divRef = React.useRef();

  const scroll = (scrollOffset) => {
    divRef.current.scrollLeft += scrollOffset;
  };

  return (
    console.log(currentitemID),
    (
      //For each id in relatedArr, pass to the Card component along with
      //the id of the current item

      <div
        className="slide-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3 class="relatedHeader"> RELATED ITEMS </h3>
        <div className="related-container" style={{ display: "flex" }}>
          <div className="chevleft" style={{ display: "flex" }}>
            <button className="prev" onClick={() => scroll(-50)}>
              <FontAwesomeIcon icon={faChevronLeft} className="goLeft" />
            </button>
          </div>
          <div
            className="items-container"
            ref={divRef}
            style={{ display: "flex" }}
          >
            {relatedArr.map((item, i) => (
              <div
                className="single-item-container"
                style={{
                  border: "1px solid grey",
                  display: "flex",
                  overflow: "hidden",
                  height: "250px",
                  width: "140px",
                  margin: "4px",
                }}
              >
                <Card
                  relatedId={item}
                  currentItemID={parseInt(currentitemID)}
                />
              </div>
            ))}
          </div>
          <div className="chevright" style={{ display: "flex" }}>
            <button className="next" onClick={() => scroll(50)}>
              <FontAwesomeIcon icon={faChevronRight} className="goRight" />
            </button>
          </div>
        </div>
        <h3 class="relatedHeader">YOUR OUTFIT </h3>
        <div className="outfit-container" style={{ display: "flex" }}>
          <Outfit currentItemID={currentitemID} />
        </div>
      </div>
    )
  );
};

export default RelatedItems;
