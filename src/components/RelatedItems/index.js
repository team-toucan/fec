import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card.jsx'
import { getRelatedProductsById } from '../../api';


const RelatedItems = () => {
  const { id } = useParams();
  const [relateditems, updateRelated] = useState([]);
  console.log('state arr', relateditems)
  useEffect(() => {
    const getrelateditems = async () => {
      const resp = await getRelatedProductsById(id);
      console.log('response', resp.data);
      const data = resp.data;
      console.log('dat', data);
      updateRelated(data);
    }
    getrelateditems();
  }, []);

  return (
    <div>

    {relateditems.map((item, i) => (
      console.log('passing into card', item),
    <div style={{ border: '1px solid blue' }}>
      <Card relatedId={item} />
    </div>
  ))}
  </div>
  )
}

// async function RelatedItems() {

//   // const [relatedIds, setRelatedIds] = useState([]);


//   try {
//     // getRelatedProductsById(39337).then((res) => {
//     console.log('INCONS', relatedIds);
//     const returnedData = await getRelatedProductsById(39337);
//     var relatedIds = returnedData.data;
//     console.log('returned', returnedData.data)
//     console.log('setret', relatedIds)

//     return (
//       <div>

//         {relatedIds.map((item, i) => (
//         <div style={{ border: '1px solid blue' }}>
//           <Card relatedId={item} />
//         </div>
//       ))}
//       </div>
//   );

//   } catch (err) {
//     console.log(err);
//   }
//   console.log('HERE', relatedIds);

// }


export default RelatedItems;