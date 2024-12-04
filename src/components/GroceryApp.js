import React from 'react';

const Product = (props) => {
  const plus = (index) => {
    props.onVote('plus', index)
  };
  const minus = (index) => {
    props.onVote('minus', index)
  };
  return (
    <li key={props.index}>
      <span>{props.name}</span> - <span>votes:{props.votes}</span>
      <button onClick={(e) => plus(props.index)}>+</button>{" "}
      <button onClick={(e) => minus(props.index)}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
     let updatedProducts = [...products]
      let productList = products[index]
    if(dir == 'plus') {     
      productList['votes'] = ++productList['votes']
    }
    else {
      productList['votes'] = --productList['votes']
       
    }
    updatedProducts.splice(index, 1, productList);
      setProducts(updatedProducts)
  };

  return (
    <ul>
      {products.map((product, index) => {
      return <Product votes={product.votes} name={product.name} index={index} onVote={onVote}/>
      })}
    </ul>
  );
}

export default GroceryApp