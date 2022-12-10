import React from "react";
import { Link } from "react-router-dom";
import "../ui/styles/globals.scss";
import { Button } from "../ui/components/1-atoms/Button";
import { useShoppingCart } from "../contexts/ShoppingCartContex";
import { CartItem } from "../ui/components/2-molecules";
import WebshopItems from "../data/terminals.json";

export const Cart = () => {
  const { cartItems } = useShoppingCart();

  console.log(cartItems);
  const emptyCart = cartItems.length < 0;

  return (
    <main className="nets_cart">
      <section className="nets_cart_section">
        <h3>Din indkøbskurv</h3>
        <Link to={`/products`}>Tilbage til produkter</Link>
      </section>
      {emptyCart ? (
        <span>
          <p>Din kurv er tom</p>
          <Link to={"/products"}></Link>
        </span>
      ) : (
        <section className="nets_cart_grid">
          <div className="nets_cart_grid_header">
            <h4 className="grid_header_product">Produkt</h4>
            <h4 className="grid_header_subtotal">Total pris</h4>
          </div>

          <div className="nets_cart_grid_body">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className="nets_cart_grid_footer">
            <h4>I alt</h4>
            <h4 className="grid_footer_total">
              {cartItems.reduce((total, cartItem) => {
                const item = WebshopItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
              kr. pr. måned
            </h4>
          </div>
          <Button label="Fortsæt til bestilling"></Button>
        </section>
      )}
    </main>
  );
};
