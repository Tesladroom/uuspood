import RatingStar from "./RatingStar";
import "../styles/Product.css";

function Product({
  cart,
  updateCart,
  name,
  category,
  id,
  promotion,
  rating,
  nbavis,
  picture,
  price,
}) {
  function handleClick(id, name) {
    console.log("22 Click on " + id + " " + name);
    //si le produit est déja dans le panier on incrémente
    //sinon on ajoute un nouveau produit

    const indexItemDansLePanier = cart.findIndex((item) => item.id === id);
    if (indexItemDansLePanier >= 0) {
      cart[indexItemDansLePanier].amount =
        cart[indexItemDansLePanier].amount + 1;
      updateCart([...cart]);
    } else {
      updateCart([...cart, { id, name, price, amount: 1 }]);
    }
  }

  return (
    <div className="one-product">
      <img
        src={require("../assets/ProductsPictures/" + picture)}
        alt="product"
      ></img>
      <div className="name-rating-price">
        <p> {name}</p>
        <div className="rating-price">
          <RatingStar rating={rating} nbavis={nbavis} />
          <p>{price}€</p>
        </div>
        <div className="button-container">
          <button onClick={() => handleClick(id, name)}>Lisa ostukorvi</button>
        </div>
      </div>

      {promotion && <div className="solde">Eri hind!</div>}
    </div>
  );
}

export default Product;
