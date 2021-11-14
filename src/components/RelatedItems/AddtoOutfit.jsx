import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getProductById, getProductStyleById } from "../../api";
import { useParams } from "react-router-dom";

var store = require("store");
const items = store.get("outfitItems") || [];

const AddtoOutfit = ({ currentItemID }) => {
  const [additem, updateAddItem] = useState({ info: {} });
  const [imgURL, updateImg] = useState({ img: {} });

  const addClick = async () => {
    console.log("♥️ addclick", currentItemID.currentitemID);

    if (currentItemID.currentitemID) {
      const currentResp = await getProductById(currentItemID.currentitemID);
      const curResponseInfo = currentResp.data;
      updateAddItem(curResponseInfo);
    }
  };

  useEffect(() => {
    //if there is a showing item
    //push that into the array retrieved from store
    // reset the array in store so it has the new item
    if (additem.id) {
      items.push(additem);
      store.set("outfitItems", items);
    }
  });

  return (
    <div class="single-item-container">
      <FontAwesomeIcon
        icon={faPlus}
        className="addtoOutfit"
        onClick={addClick}
      />

      <h3 className="outfitheader">Add to Outfit</h3>
    </div>
  );
};

export default AddtoOutfit;
