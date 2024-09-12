// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import Layout from "./layout.jsx";
import Home from "./pages/home.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import Single from "./pages/single.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "single/:id",
        element: <Single />,
      },
      {
        path: "*",
        element: "No page found",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
