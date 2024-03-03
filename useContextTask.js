


UseContextTask


Cart.jsx:

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useUserContext } from "../ContextProvider";

const Card = () => {
  const {
    products,
    setProducts,
    cardAmount,
    setCardAmount,
    cardQuantity,
    setCardQuantity,
  } = useUserContext();
  let a = 0;

  return (
    <>
      {products.map((product, i) => {
        const priceAfterDiscount = (
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2);

        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubTotal] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubTotal((priceAfterDiscount * quantity).toFixed(2));
        }, [quantity]);

        useEffect(() => {
          a = a + +subTotal;
          setCardAmount(a);
        }, []);

        const handleQuantitySub = (priceAfterDiscount, quantity) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setCardQuantity(cardQuantity - 1);
            a = cardAmount - +priceAfterDiscount;
            setCardAmount(a);
          }
        };

        const handleQuantityAdd = (i, priceAfterDiscount, quantity) => {
          if (products[i].stock > quantity) {
            setQuantity(quantity + 1);
            setCardQuantity(cardQuantity + 1);
            setCardAmount(cardAmount + +subTotal);
            console.log(a);
            a = cardAmount + +priceAfterDiscount;
            console.log(a);
            setCardAmount(a);
          }
        };
        const price = product.price;
        const Dprice = price * (product.discountPercentage / 100);

        const [TotalSub, setTotalSub] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        return (
          <div className="col-12 d-flex justify-content-center align-items-center ">
            <div
              className="card mb-3"
              style={{ width: "80%", borderRadius: "20px"}}
            >
              <div className="row g-0 ">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img
                    src={product.images}//[1] ? product.images[1] : product.images[0]
                    className="img-fluid product-img"
                    alt="..."
                    style={{ borderRadius: "30px" }}
                  />
                </div>

                <div className="col-md-7 ">
                  <div className="row g-0">
                    <div className="col-md">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title">{product.title}</h5>
                          </div>
                          <div className="col">
                            <h5 className="card-title d-flex justify-content-end ">
                              ${product.price}
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">
                              <b>Brand : </b>
                              {product.brand}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <p className="card-text text-success ">
                              Discount Offer : {product.discountPercentage}%
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">{product.description}</p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text text-danger">
                              In Stock : {product.stock}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                        <div className="row">
                          <div className="col d-flex align-items-center">
                            <h5 className="review-stat">
                              Rating: {product.rating}
                            </h5>
                          </div>
                          <div className="col d-flex align-items-center justify-content-end">
                            <div>
                              <button
                                className="btn btn-secondary"
                                onClick={() =>
                                  handleQuantitySub(
                                    priceAfterDiscount,
                                    quantity
                                  )
                                }
                              >
                                -
                              </button>
                              <span> {quantity} </span>
                              <button
                                className="btn btn-secondary"
                                onClick={() =>
                                  handleQuantityAdd(
                                    i,
                                    priceAfterDiscount,
                                    quantity
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="col"></div>
                        </div>
                        <div className="row">
                          <div className="col card-text d-flex align-items-center ">
                            <small className="text-muted d-flex align-items-center">
                              Last updated 3 mins ago
                            </small>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 p-4 subtotal">
                    <div className="col ">
                      <div className="row">
                        <div className="card-title col">
                          Original Price (1 item) :
                        </div>
                        <div className="card-title col text-end">${price}</div>
                      </div>
                      <div className="row">
                        <div className="card-title col text-success">
                          Discount Amount :
                        </div>
                        <div className="card-title col text-end text-success">
                          ${Math.round(price - (price - Dprice))}
                        </div>
                      </div>
                      <div className="row">
                        <div className="card-title col">
                          Final Price (Price - Discount) :
                        </div>
                        <div className="card-title col  text-end ">
                          ${priceAfterDiscount}
                        </div>
                      </div>
                      <div className="row">
                        <div className="card-title col d-flex align-items-center">
                          Sub-Total Amount (Final price * Quantity) :
                        </div>
                        <div className="card-title col text-end fs-4 fw-normal">
                          ${subTotal}
                        </div>
                      </div>
                      {/* <div className="row">
                    <div className="card-title col d-flex align-items-center"></div>
                    <div className="card-title col text-end fs-4 fw-normal">
                      <button className="btn btn-primary">
                        Proceed to pay
                      </button>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;

Footer.jsx :

import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p><h3>Use It... Save Money...</h3></p>
      </div>
    </footer>
  );
}

export default Footer;

Header.jsx :

import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">TOTAL QTY: {cardQuantity}</div>
          <div className="col">TOTAL Price : { (cardAmount).toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to pay</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

Navbar.jsx :

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserContext } from "../ContextProvider";

const Navbar = () => {
  const { cardQuantity } = useUserContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          E-cart Shopping
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Cart ( {cardQuantity} )
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  

App.jsx :

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <><div className="fixed-top">
      <Navbar/>
      <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card  />
      </div>
      <Footer/>
    </>
  );
}

export default App;

ContextProvider.jsx :

import React, { createContext, useContext, useState } from "react";
import Products from "./Products";

const ContextContainer = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(products.length);


  
  return (
    <ContextContainer.Provider
      value={{
        products,
        setProducts,
        cardQuantity,
        setCardQuantity,
        setCardAmount,
        cardAmount
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};

export const useUserContext = () => {
  return useContext(ContextContainer);
};

main .jsx :

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

Product.jsx :

export default [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1"
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44, //---------
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": 'https://m.media-amazon.com/images/I/61HHbO9NDFL.jpg'
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": 'https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800'
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": 'https://5.imimg.com/data5/SELLER/Default/2023/6/316894377/HW/EM/ZV/157629195/oppo-f19-pro-plus-5g-8-128gb-.jpg'
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": 'https://5.imimg.com/data5/ZR/TV/HW/SELLER-57126529/huawei-p30-pro-6-gb-ram-plus-128-gb-rom-pearl-white-mobile-500x500.jpg'
    }
]



