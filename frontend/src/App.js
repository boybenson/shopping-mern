import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const HomeScreen = lazy(() => import("./screens/home-screen/home-container"));
const CartScreen = lazy(() => import("./screens/cart-screen/cart-container"));
const SpecificCategoryContainer = lazy(() =>
  import("./screens/specific-category-screen/specific-category-container")
);

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Switch>
              <Route
                path="/v1/category"
                component={SpecificCategoryContainer}
              />
              <Route path="/v1/cart" component={CartScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </main>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
