import { createBrowserRouter } from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { Service } from "./pages/service";
import { Home } from "./pages/home";
import { NotFound } from "./pages/404-page";
import { BlogInfo } from "./pages/blog-info";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog/:id",
    element: <BlogInfo />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: "/service",
    element: <Service />,
    errorElement: <NotFound />,
  },
]);
