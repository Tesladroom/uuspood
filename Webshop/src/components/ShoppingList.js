import { productList } from "../data/data";
import "../styles/ShoppingList.css";
import Product from "./Product";
import Category from "./Category";
import { useState } from "react";

function ShoppingList({cart, updateCart}) {
  //list category
  let categoryList = [];
  productList.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  const [category, updateCategory] = useState('');

  console.log('category'+category);

  return (
    <div className="shoppingList">
      {/* <ul>
        {categoryList.map((cat, i) => {
          return <li key={i}>{cat}</li>;
        })}
      </ul> */}
     
      <h2>Müügis olevad produktid :</h2>
      <Category categories={categoryList} category={category} updateCategory={updateCategory}/>
      <ul className="product-list">
        {productList.map((item, i) => {
          if(category ==='' || item.category === category)
          return (
            <li className="product" key={i}>
              <Product cart={cart} updateCart={updateCart} name={item.name} category={item.category} id={item.id} promotion={item.promotion} rating={item.rating} nbavis={item.nbavis} picture={item.picture} price={item.price}></Product>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
