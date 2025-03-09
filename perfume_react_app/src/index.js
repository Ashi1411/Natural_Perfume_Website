import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Products from './Products';
import ProdDetails from './ProdDetails';
import Cart from './Cart';
import BuyNow from './BuyNow';


const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter(
  [
    // static routing
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'about-us',
      element:<Aboutus></Aboutus>
    },
    {path: 'collection',
      element: <Collection></Collection>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    {
      path:'cart',
      element:<Cart></Cart>
    },
    // dynamic routing
    {
      path:'products/:id',
      element:<Products></Products>
    },
    // dynamic routing
    {
      path:'prodDetails/:id',
      element:<ProdDetails></ProdDetails>
    },
    // dynamic routing
    {
      path:'buynow/:id',
      element:<BuyNow></BuyNow>
    },
    // // Error Page
    // {
    //   path:'*',
    //   element:<Error404></Error404>
    // }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router = {allRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
