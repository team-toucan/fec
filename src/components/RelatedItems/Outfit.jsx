import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductStyleById } from "../../api";
import Name from "./Name.jsx";
import AddtoOutfit from "./AddtoOutfit.jsx";
import Card from "./Card.jsx";
var store = require("store");
const items = store.get("outfitItems");

//go thru local storage and render items

const Outfit = (currentItemID) => {
  // console.log("IN OUTFIT", items);

  // const [showingitem, updateCurItem] = useState({ info: {} });
  // const [imgURL, updateImg] = useState({ img: {} });

  // useEffect(() => {
  //   const currentInfo = async () => {
  //     const currentResp = await getProductById(currentItemID);
  //     const curResponseInfo = currentResp.data;
  //     updateCurItem(curResponseInfo);
  //   };
  //   currentInfo();
  // }, []);

  //TODO: refactor item trains below into components
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            border: "1px solid blue",
            overflow: "hidden",
            height: "250px",
            width: "140px",
            margin: "4px",
          }}
        >
          <AddtoOutfit currentItemID={currentItemID} />
        </div>
        {items && (
          <div className="items-container" style={{ display: "flex" }}>
            {items.map((item, i) => (
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
                <Card relatedId={item.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Outfit;
