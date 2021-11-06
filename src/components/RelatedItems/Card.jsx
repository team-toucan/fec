import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getProductStyleById } from '../../api';
import Name from './Name.jsx';
import Features from './Features.jsx';
import Modal from '@components/Modal';

const Card = ({ relatedId }) => {
  const [item, updateItem] = useState({info:{}});
  const [features, updateFeat] = useState({info:{}});
  const [imgURL, updateImg] = useState({img:{}});
  const [isShowing, setIsShowing] = useState(false);


  useEffect(() => {
    console.log('in ue');
    const prodInfo = async () => {
      const response = await getProductById(relatedId);
      console.log('after await', response.data);
      const responseInfo = response.data;
      updateItem(responseInfo);
      updateFeat(responseInfo.features);
    }
    const prodThumb = async () => {
      const imgRes = await getProductStyleById(relatedId);
      console.log('img after await', imgRes.data.results[0].photos[0].thumbnail_url);
      updateImg(imgRes.data.results[0].photos[0]);
    }

    prodInfo();
    prodThumb();

  }, []);

//TODO: refactor item trains below into components
  return (
    console.log('feat in CARD RETURN', features),

      <div>
        <div>
        <p>{item.category}</p>
        <h3>{item.name}</h3>
        <p>{item.default_price}</p>

          <img
            src={imgURL.thumbnail_url}
            onClick={() => setIsShowing(true)}
          />
          </div>
          <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
            {features.map((item) => (
              console.log('inside FEAT MODAL', item.feature)
            ))}
          </Modal>
      </div>

  )



};

export default Card;