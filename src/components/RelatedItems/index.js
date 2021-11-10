import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
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

  return (
    //For each id in relatedArr, pass to the Card component along with
    //the id of the current item
    <div>
      {relatedArr.map((item, i) => (
        <div
          style={{
            border: "1px solid blue",
            display: "inline-flex",
            overflow: "hidden",
            height: "250px",
            width: "140px",
          }}
        >
          <Card relatedId={item} currentItemID={parseInt(currentitemID)} />
        </div>
      ))}
    </div>
  );
};

export default RelatedItems;
