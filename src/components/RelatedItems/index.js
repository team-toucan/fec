import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
import { getRelatedProductsById } from "../../api";
import { getProductById, getProductStyleById } from "../../api";

const RelatedItems = () => {
  const { id } = useParams();
  const [relateditems, updateRelated] = useState([]);
  const [currentitem, updateCurrent] = useState({ info: {} });

  useEffect(() => {
    const getrelateditems = async () => {
      const relatedResponse = await getRelatedProductsById(id);
      const relatedinfo = relatedResponse.data;
      updateRelated(relatedinfo);
      const currResponse = await getProductById(id);
      const currentinfo = currResponse.data;
      updateCurrent(currentinfo);
    };
    getrelateditems();
  }, []);

  return (
    <div>
      {console.log("eeeeeeeeeeeee", currentitem, relateditems)}
      {relateditems.map(
        (item, i) => (
          console.log("passing into card", item),
          (
            <div
              style={{
                border: "1px solid blue",
                display: "inline-flex",
                overflow: "hidden",
                height: "250px",
                width: "140px",
              }}
            >
              <Card relatedId={item} currentItem={currentitem} />
            </div>
          )
        )
      )}
    </div>
  );
};

export default RelatedItems;
