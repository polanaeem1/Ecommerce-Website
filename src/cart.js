import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cart.css";
const Cart = ({ cart, setCart }) => {
  const incqty = (e) => {
    const exist = cart.find((x) => {
      return x.id === e.id;
    });
    setCart(
      cart.map((element) => {
        return element.id === e.id ? { ...exist, qty: exist.qty + 1 } : element;
      })
    );
  };
  const decqty = (e) => {
    const exist = cart.find((x) => {
      return x.id === e.id;
    });
    setCart(
      cart.map((element) => {
        return element.id === e.id ? { ...exist, qty: exist.qty - 1 } : element;
      })
    );
  };
  const removeProduct = (e) => {
    const exist = cart.find((x) => {
      return x.id === e.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== e.id;
        })
      );
    }
  };
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="containercart">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((e) => {
            return (
              <div className="cart_item" key={e.id}>
                <div className="img_box">
                  <img src={e.Img} alt={e.Title}></img>
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{e.Cat}</h4>
                    <h3>{e.Title}</h3>
                    <p>Price: ${e.Price}</p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(e)}>
                        +
                      </button>
                      <input type="text" value={e.qty}></input>
                      <button className="decqty" onClick={() => decqty(e)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">Sub total :{e.Price * e.qty}</h4>
                  </div>
                  <div className="close">
                  <button onClick={() => removeProduct(e)}>
                    <AiOutlineClose />
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">$ {Totalprice}</h2>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
