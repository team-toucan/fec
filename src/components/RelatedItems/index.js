import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.jsx";
import { getRelatedProductsById } from "../../api";

const RelatedItems = () => {
  const { id } = useParams();
  const [relateditems, updateRelated] = useState([]);

  useEffect(() => {
    const getrelateditems = async () => {
      const resp = await getRelatedProductsById(id);
      const data = resp.data;
      updateRelated(data);
    };
    getrelateditems();
  }, []);

  return (
    <div>
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
              <Card relatedId={item} />
            </div>
          )
        )
      )}
    </div>
  );
};

export default RelatedItems;
