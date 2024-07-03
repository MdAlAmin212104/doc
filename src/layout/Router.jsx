import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children : [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/service",
          element: <Service/>,
        },
        {
          path: "/Blog",
          element: <Blog/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ]
    },
]);