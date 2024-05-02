
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from 'src/pages/ErrorPage';
import MainLayout from 'src/Layouts/MainLayout';
import HomePage from 'src/pages/HomePage';
import ProductsPage from 'src/pages/ProductsPage';
import ProductPage, { loaderFunction } from 'src/pages/ProductPage';
import AddproductPage from 'src/pages/AddproductPage';
import EditPage from 'src/pages/EditPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/products",
        element: <ProductsPage/>,
      },
      {
        path: "/product/:id",
        element: <ProductPage/>,
        loader:loaderFunction,
        
      },
      {
        path: "/edit/:id",
        element: <EditPage/>,
        loader:loaderFunction,
      },
      {
        path: "/addProduct",
        element: <AddproductPage/>,
      },
    ],
  },
 
]);
const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App