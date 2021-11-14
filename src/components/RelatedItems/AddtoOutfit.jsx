// import React from "react";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { getProductById, getProductStyleById } from "../../api";
// import { useParams } from "react-router-dom";
// import useLocalStorageState from "use-local-storage-state";
// import store from "storejs";
// var store = require("store");

// const AddtoOutfit = ({ currentItemID }) => {
//   const [selectedItem, setSelectedItem] = useState({
//     details: [],
//   });
//   var addID = currentItemID.currentItemID;

//   const addOutfitClick = (addID) => {
//     useEffect(() => {
//       const outfitIds = store.get("outfitDetails");
//       if (outfitIds.length > 0) {
//         //if current list in store exists
//         outfitIds.push(addID);
//       }
//     }, []);

//     useEffect(() => {
//       if (selectedItem.details.length != 0) {
//         store.set("outfitDetails");
//         localStorage.setItem(
//           "outfitDetails",
//           JSON.stringify(selectedItem.details)
//         );
//       }
//     }, [selectedItem.details]);
//   };

//   //click function
//   //take data of current item and add it to local storage
//   //assign a var array to current local storage
//   //add current product id to that var
//   //save the updated var to local storage
//   //rerender component

//   // const [storageOutfitItems, setStorageOutfitItems] = useLocalStorageState(
//   //   "outfitItems",
//   //   []
//   // );
//   // const [outfitItems, setOutfitItems] = useState(storageOutfitItems);
//   // const [additem, updateAddItem] = useState({ info: {} });
//   // //initialize outfit list array accordingly to the local storage data
//   // useEffect(() => setStorageOutfitItems(outfitItems), []);

//   // //edit the localstorage array if the outfit list changes
//   // useEffect(() => setStorageOutfitItems(outfitItems), [outfitItems]);
//   // useEffect(() => setOutfitItems(outfitItems), [outfitItems]);

//   // const getProductFunction = async () => {

//   //   let productData;

//   //   await api.getProduct(product_id)
//   //     .then(res => productData = res.data)
//   //     .then(() => api.getMetadata({product_id}))
//   //     .then(res => productData['ratings'] = res.data.ratings)
//   //     .then(() => api.getProductStyles(product_id))
//   //     .catch(() => console.log('error, cannot fetch API', err))
//   //     .then(res => productData['image'] = res.data.results[0].photos[0].thumbnail_url)
//   //     .then(() => setOutfitItems([...outfitItems, productData]))
//   //     .catch(err => console.log('error, cannot change outfit items state', err))
//   // };

//   // const addNewOutfitClick = (currentItemID) => {
//   //   let productFound = false;
//   //   console.log("prelength", outfitItems);

//   //   for (let i = 0; i < outfitItems.length; i++) {
//   //     if (currentItemID.currentItemID === outfitItems[i].id) {
//   //       productFound = true;
//   //     }
//   //   }
//   //   if (productFound === false) {
//   //     console.log("product not in outfit");
//   //   } else return;
//   // };

//   // const removeListItem = (id) => {
//   //   let filteredItems = outfitItems.filter(
//   //     (outfitItem) => outfitItem.id !== id
//   //   );
//   //   setOutfitItems(filteredItems);
//   // };

//   //   let itemFound = false;\
//   //   if (window.storage.outfitItems) {
//   //     setOutfitItems(window.storage.outfitItems);
//   //   } else {
//   //     setOutfitItems([]);
//   //   }
//   //   console.log("prelength", outfitItems);

//   //   //if item exists in outfit
//   //   for (let i = 0; i < outfitItems.length; i++) {
//   //     if (currentItemID.currentItemID === outfitItems[i].id) {
//   //       itemFound = true;
//   //     }
//   //   }
//   //   //if item does not exist in outfit
//   //   if (itemFound === false) {
//   //     addItemOutfit();
//   //   } else return;
//   // };

//   // const addItemOutfit = async () => {
//   //   console.log("♥️ hit additemoutfit");

//   //   if (currentItemID.currentItemID) {
//   //     const currentResp = await getProductById(currentItemID.currentItemID);
//   //     const curResponseInfo = currentResp.data;
//   //     updateAddItem(curResponseInfo);
//   //   }
//   // };

//   // const removeListItem = (id) => {
//   //   let filteredItems = outfitItems.filter(
//   //     (outfitItem) => outfitItem.id !== id
//   //   );
//   //   setOutfitItems(filteredItems);
//   // };

//   // useEffect(() => {
//   //   //if there is a showing item
//   //   //push that into the array retrieved from store
//   //   // reset the array in store so it has the new item
//   //   if (additem.id) {
//   //     outfitItems.push(additem);
//   //     localStorage.setItem("outfitItems", outfitItems);
//   //   }
//   // });

//   return (
//     <div class="single-item-container">
//       <FontAwesomeIcon
//         icon={faPlus}
//         className="addtoOutfit"
//         onClick={function (event) {
//           addNewOutfitClick();
//         }}
//       />

//       <h3 className="outfitheader">Add to Outfit</h3>
//     </div>
//   );
// };

// export default AddtoOutfit;
