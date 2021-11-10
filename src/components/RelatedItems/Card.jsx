import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductStyleById } from "../../api";
import Name from "./Name.jsx";
import Features from "./Features.jsx";
import ComparisonContent from "./ComparisonContent.jsx";
import Modal from "@components/Modal";

const Card = ({ relatedId, currentItemID }) => {
  console.log("✅IN CARDddd", relatedId, currentItemID);
  const [showingitem, updateCurItem] = useState({ info: {} });
  const [relateditem, updateRelItem] = useState({ info: {} });
  const [imgURL, updateImg] = useState({ img: {} });
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const currentInfo = async () => {
      const currentResp = await getProductById(currentItemID);
      const curResponseInfo = currentResp.data;
      updateCurItem(curResponseInfo);
    };

    currentInfo();
  }, []);

  useEffect(() => {
    const relInfo = async () => {
      console.log("RELATED ID", relatedId, "curid", currentItemID);
      const relatedResp = await getProductById(relatedId);
      const relResponseInfo = relatedResp.data;
      updateRelItem(relResponseInfo);
    };
    const prodThumb = async () => {
      const imgRes = await getProductStyleById(relatedId);
      updateImg(imgRes.data.results[0].photos[0]);
    };
    relInfo();
    prodThumb();
  }, []);

  //TODO: refactor item trains below into components
  return (
    console.log("IN CARD RETURN", relateditem, showingitem),
    (
      <div>
        <div>
          <p>{relateditem.category}</p>
          <h3>{relateditem.name}</h3>
          <p>{relateditem.default_price}</p>

          <img src={imgURL.thumbnail_url} onClick={() => setIsShowing(true)} />
        </div>
        <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
          <p>
            {" "}
            <ComparisonContent
              relatedItem={relateditem}
              currentItem={showingitem}
            />
          </p>
        </Modal>
      </div>
    )
  );
};

export default Card;
