import "../styles/Cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, updateIsOpen] = useState(true);

  let classIsOpen = isOpen ? "cart is-open" : "cart";

  let nbItem = 0;
  cart.forEach((element) => {
    nbItem += element.amount;
  });

  let montantTotal = 0;
  cart.forEach((element) => {
    montantTotal += element.price * element.amount;
  });

  useEffect(() => {
    document.title = `Krissu Arvuti Pood`;
  }, [montantTotal]);

  return (
    <div className={`cart ${classIsOpen}`}>
      <span
        className="material-icons close-button"
        onClick={() => {
          updateIsOpen(isOpen ? false : true);
        }}
      >
        shopping_cart
      </span>

      <div className="panier">
        <h2>Ostukorv</h2>
        <ul>
          {cart.map((product, index) => {
            return (
              <li key={`${product.id} ${index}`}>
                {product.name} {product.price}€ : {product.amount}{" "}
              </li>
            );
          })}
        </ul>
        <p>Tooteid ostukorvis : {nbItem}</p> <p>Hind kokku :{montantTotal}€</p>
      </div>
    </div>
  );
}

/* return (
    <div className="cart">
      {isOpen && (
        <div>
          <span
            class="material-icons close-button"
            onClick={() => updateIsOpen(false)}
          >
            cancel
          </span>
          <h2>Panier</h2>
          <ul>
            <li>Produit 1: {produit1Price}€</li>
            <li>Produit 2: {produit2Price}€</li>
            <li>Produit 3: {produit3Price}€</li>
          </ul>
          <p>Produit dans le panier : {cart}</p>{" "}
          <p>Total : {produit1Price + produit2Price + produit3Price}€</p>
        </div>
      )}
      {!isOpen && (
        <div>
          <span class="material-icons" onClick={() => updateIsOpen(true)}>
            shopping_cart
          </span>
        </div>
      )}
    </div>
  ); 
}*/

export default Cart;
