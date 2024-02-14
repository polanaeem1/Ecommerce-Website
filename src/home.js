import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import tablet from "./img/tablet.png";
import mobile from "./img/mobile.png";
import headphone from "./img/headphone.png";
import cpuheat from "./img/cpuheat.png";
import smartwatch from "./img/smartwatch.png";
import Homeproduct from "./homeproduct";
import "./home.css";
const Home = ({ detail, view, close, setClose, addtocart }) => {
  const [homeproduct, setHomeProduct] = useState(Homeproduct);
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
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link-home">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={tablet} alt="sliderimg"></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src={mobile} alt="mobile"></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={smartwatch} alt="cpuheat"></img>
            </div>
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={headphone} alt="headphone"></img>
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={cpuheat} alt="cpuheat"></img>
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3> Free Shipping</h3>
              <p>Order above 1000$</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>Oh every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeproduct.map((e) => {
            return (
              <>
                <div className="box" key={e.id}>
                  <div className="img_box">
                    <img src={e.Img} alt={e.Title}></img>
                    <div className="icon">
                      <li onClick={() => addtocart(e)}>
                        <AiOutlineShoppingCart />
                      </li>
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
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={tablet} alt="sliderimg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
