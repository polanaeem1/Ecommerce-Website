import React, { useState } from "react";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./rout";
import Homeproduct from "./homeproduct";

const App = () => {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Homeproduct);

  const searchbtn = (product) => {
    const change = Homeproduct.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };
  const view = (e) => {
    setDetail([{ ...e }]);
    setClose(true);
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product is added to cart");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
