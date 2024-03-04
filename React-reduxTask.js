


React Redux Task

Cart.jsx :

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const [productCount, setProductCount] = useState(
    products.reduce((counts, product) => {
      counts[product.id] = 1; // Default count for each product is 1
      return counts;
    }, {})
  );

  const increaseCount = (productId) => {
    setProductCount((prevCounts) => ({
      ...prevCounts,
      [productId]: prevCounts[productId] + 1,
    }));
  };

  const decreaseCount = (productId) => {
    if (productCount[productId] > 1) {
      setProductCount((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    } else {
      // If quantity is 1 or below, remove the product from the cart
      removeProduct(productId);
    }
  };

  const removeProduct = (id) => {
    dispatch(remove(id));
    setProductCount((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[id];
      return newCounts;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * productCount[product.id];
    });
    return total;
  };

  const cards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <div className="card-products">
        <Card style={{ width: "18rem" }} className="cards">
          <Card.Img
            variant="top"
            src={product.images}
            style={{ width: "250px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Current Price: <i class="fa fa-inr"></i>
              {product.price}
            </Card.Text>
            <div className="InDe">
              <div className="price-total">
                <Card.Text className="card-text">
                  Subtotal of product price:<i class="fa fa-inr"></i>{" "}
                  {product.price * productCount[product.id] || product.price}
                </Card.Text>
              </div>
              <div className="price-total">
                <Button
                  variant="primary"
                  className="increament"
                  style={{ borderRadius: "50%" }}
                  onClick={() => decreaseCount(product.id)}
                >
                  -
                </Button>
                <Card.Text className="text">
                  {productCount[product.id] || 1}
                </Card.Text>
                <Button
                  variant="primary"
                  className="increament"
                  style={{ borderRadius: "50%" }}
                  onClick={() => increaseCount(product.id)}
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              variant="danger"
              className="add mt-2"
              onClick={() => removeProduct(product.id)}
            >
              Remove Item
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <>
      <div className="text-white">
        <span style={{ fontSize: 30 }}>My Cart</span> <br />
        <span style={{ fontSize: 30 }}>
          Grand Total:<i class="fa fa-inr"></i> {calculateTotalPrice()}
        </span>
        {products.length === 0 && (
          <div className="NoItems">
            <img
              src="https://img.freepik.com/free-photo/funny-illustration-3d-cartoon-backpacker_183364-80424.jpg?w=1380&t=st=1690967265~exp=1690967865~hmac=3a953df10987b13a88915a21662843501208169d499267818c9ff582e45e1ca6://cdni.iconscout.com/illustration/premium/thumb/before-login-no-product-in-cart-4006356-3309942.png"
              alt="Cart Empty image"
            />
          </div>
        )}
        <div className="card-products mb-4">{cards}</div>
      </div>
    </>
  );
};

export default Cart;

Dashboard.jsx :

import React from "react";
import Products from "./products";

const Dashboard = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default Dashboard;


NavBarPanel.jsx :

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="NavB fixed-header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold"> 
          <span className="shopping">Shopping Cart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-white opt">
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-white opt">
              My Cart ({CartProducts.length})
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

Products.jsx :

import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = () => {
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    for (let x of CartProducts) {
      if (x.id === productId) {
        return true;
      }
    }
    return false;
  };
  console.log(CartProducts);
  const toggleCart = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/mocks/products.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((e) => console.log(e));
  }, []);

  const cards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <div className="card-products">
        <Card style={{ width: "18rem" }} className="cards">
          <Card.Img
            variant="top"
            src={product.images}
            style={{ width: "250px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Current Price: <i className="fa fa-inr"></i>
              {product.price}
            </Card.Text>
            <Button
              variant="primary"
              className="add"
              onClick={() => {
                toggleCart(product);
              }}
            >
              {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-white">Shopping Cart Using React-Redux</h1>
      <div className="card-products">{cards}</div>
    </>
  );
};

export default Products;


RootLayout.jsx :

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";
const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;


App.jsx :

import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


Main.jsx :

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


Products.json :

{
    "products": [
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
            "images": [
                
                "data:image/jpeg;base64,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"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                
                "data:image/jpeg;base64,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"
            ]
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
            "images": [
                "data:image/jpeg;base64,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"
            ]
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
            "images": [
        
                "data:image/jpeg;base64,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"
            ]
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
            "images": [
                
                "data:image/jpeg;base64,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"
            ]
        }
    ]
} 