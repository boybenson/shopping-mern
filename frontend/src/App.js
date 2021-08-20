import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";

const HomeScreen = lazy(() => import("./screens/home-screen/home-container"));
const CartScreen = lazy(() => import("./screens/cart-screen/cart-container"));
const SpecificCategoryScreen = lazy(() =>
  import("./screens/specific-category-screen/specific-category-container")
);
const SigninScreen = lazy(() =>
  import("./screens/signin-screen/signin-container")
);
const SignupScreen = lazy(() =>
  import("./screens/signup-screen/signup-container")
);

const ProfileScreen = lazy(() =>
  import("./screens/profile-screen/profile-container")
);

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <main>
            <Switch>
              <Route path="/v1/user/profile" component={ProfileScreen} />
              <Route path="/v1/auth/signup" component={SignupScreen} />
              <Route path="/v1/auth/signin" component={SigninScreen} />
              <Route path="/v1/category" component={SpecificCategoryScreen} />
              <Route path="/v1/cart" component={CartScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </main>
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
