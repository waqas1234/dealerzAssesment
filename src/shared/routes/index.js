import { Routes, Route } from "react-router-dom";
import Home from "@screens/Home";
import ProductDetail from "@screens/ProductDetail";
import Cart from "@screens/Cart/index";

export const AppRoutes = {
  home: { path: "/", component: Home },
  productdetail: { path: "/productdetail/:id", component: ProductDetail },
  cart: { path: "/cart", component: Cart },
};

const WebRoutes = () => {
  return (
    <Routes>
      {Object.keys(AppRoutes).map((route, index) => {
        const { path, component: Component } = AppRoutes[route];
        return (
          <Route
            key={`app-routes-${index}`}
            path={path}
            element={<Component />}
          />
        );
      })}
    </Routes>
  );
};

export default WebRoutes;
