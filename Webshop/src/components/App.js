import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import FooterApp from "./FooterApp";
import ShoppingList from "./ShoppingList";
import { useState, useEffect } from "react";

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


  return (
    <div>
      <Banner></Banner>
      <div className="main">
        <Cart cart={cart} updateCart={updateCart} ></Cart>
        <ShoppingList cart={cart} updateCart={updateCart}></ShoppingList>
      </div>
      <FooterApp></FooterApp>
    </div>
  );
}

export default App;
