import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Apropos from "./pages/Apropos.jsx";
import Logement from "./pages/Logement.jsx";
import Page404 from "./pages/Page404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="apropos" element={<Apropos />} />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
