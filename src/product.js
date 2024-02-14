import React, { useState } from "react";
import Homeproduct from "./homeproduct";
import { useAuth0 } from "@auth0/auth0-react";

import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./product.css";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const filterproduct = (product) => {
    const update = Homeproduct.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const Allproducts = () => {
    setProduct(Homeproduct);
  };
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button on onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((e) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={e.Img} alt={e.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{e.Cat}</h4>
                    <h2>{e.Title}</h2>
                    <p>A Screen Everyone Will Love: </p>
                    <h3>{e.Price}</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="products">
        <h2># Products</h2>
        <p>Home - Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => Allproducts()}>All Products</li>
                <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filterproduct("Camera")}>Camera</li>
                <li onClick={() => filterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((e) => {
                return (
                  <>
                    <div className="box" key={e.id}>
                      <div className="img_box">
                        <img src={e.Img} alt={e.Title}></img>
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(e)}>
                              <AiOutlineShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}

                          <li onClick={() => view(e)}>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{e.Cat}</p>
                        <h3>{e.Title}</h3>
                        <h4>${e.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
