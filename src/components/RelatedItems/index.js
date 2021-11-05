import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card.jsx'
import { getRelatedProductsById } from '../../api';
var id = 39337;

function RelatedItems() {
  const { id } = useParams();
  const [relatedIds, setRelatedIds] = useState([]);


  getRelatedProductsById(39337).then((res) => {
    console.log('INCONS', res.data);
    setRelatedIds(res.data);
  });


  console.log('HERE', relatedIds)


  return (


    <div>

      {relatedIds.map((item, i) => (
        <div style={{ border: '1px solid blue' }}>
          <Card relatedId={item} />
        </div>
      ))}

    </div>
  );
}

export default RelatedItems;