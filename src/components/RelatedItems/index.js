import React from 'react';
import { getRelatedProductsById } from '/Users/lamiahaider/github/fec-6/src/api';
import Card from '/src/components/RelatedItems/Card.jsx'


var list = [];

getRelatedProductsById(39333).then((res) => {
  console.log('success res.data', res.data);
  list = res.data;
  console.log('success list', list);

})

class RelatedShow extends React.Component {


  constructor(props) {
    super(props);
    this.state = {list};
  }





  render() {

   console.log('in render', this.state)

    return (


      <div>
    {/* <h3>Add a New Item</h3>

        <AddGrocery addItem={this.addItem} listData={this.state.listData} addQuantity={this.addQuantity}  />

    <h3>Grocery List</h3>
        <GroceryList showList={this.state.listData} />


    <h3> Recipes</h3>
        <MealIdeas/> */}

      </div>


    )
  }
}

export default RelatedShow;





// const currentState = { relatedID: {} };
// const currentVar = { info: {} };



// getRelatedProductsById(39333).then((res) => {
//     console.log('success', res.data);
//     currentState.relatedID = res.data;

// })


// // getProductById(39333).then((res) => {
// //   console.log('got product details', res.data);
// //   tempState.productById = res.data;
// // });

// const RelatedShow = ({currentState}) => {



//   <div>
//   {'inside div', console.log(currentState)}
//    {currentState.map((item) => (
//      <Card relatedItem = {item} />
//    ))}


//    </div>
// }

// //   console.log('current state', currentState);

// //   var rows = [];

// //   for (var i = 0; i < currentState; i++) {



// //     rows.push(<Card relatedList = {currentState[i]} />);
// //   }

// //   console.log('ree', rows)
// //   return rows;

// // };


// //User clicks on product name on main
// //User taken to product page
// //Component appears lower on screen with list of related items
// //That component is taking the id from the url and passing it
// //to getRelatedProdbyID which will return data at /products/${productId}/related
// //eg https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333/related
// // gets you [ 39334,39335,39340,39339]
// //So we'll need to use url id to pull the other ids of related items
// //once we have those ids we can iterate over tht arr and
// // render a product card based on each id
// //that means navigating to api endpoint for that productid
// //getting the info for product name, **image?, category, price and rating
// // var currentState;

// // getRelatedProductsById(39333).then((res) => {
// //   console.log('success', res.data);
// //   currentState = res.data;
// //   console.log('current', currentState)
// // });


// // const relatedObj = [];

// // var list = currentState;


// // console.log('inrelatedshow', currentState, list);


// // for (var i = 0; i < list.length; i++) {
// //   console.log('app', list[i]);
// // };


// // const RelatedShow = () => {



// export default RelatedShow;
//pass id to other component