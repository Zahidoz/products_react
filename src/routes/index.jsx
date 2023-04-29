import {createBrowserRouter} from 'react-router-dom'
import MainPage from "../Pages/MainPage";
import ProductsPage from "../Pages/ProductsPage";
import ProductPage from "../Pages/ProductPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  }
]);