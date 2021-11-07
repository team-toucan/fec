import React, { useEffect, useState } from 'react';
import { getProductById } from '../../api';

const Card = ({ relatedId }) => {

  console.log('RELATED', relatedId)
  getProductById(relatedId).then((res) => {
    console.log('related info', res.data);

  });
  return null;
};

export default Card;