import { lazy } from "react";
const ProfileScreen = lazy(() =>
  import("../screens/profile-screen/profile-container")
);
const HomeScreen = lazy(() => import("../screens/home-screen/home-container"));
const CartScreen = lazy(() => import("../screens/cart-screen/cart-container"));
const SpecificCategoryScreen = lazy(() =>
  import("../screens/specific-category-screen/specific-category-container")
);
const SignupScreen = lazy(() =>
  import("../screens/signup-screen/signup-container")
);

const SigninScreen = lazy(() =>
  import("../screens/signin-screen/signin-container")
);

export const mainViewRoutes = [
  { url: "/v1/auth/signup", protected: false, component: SignupScreen },
  { url: "/v1/auth/signin", protected: false, component: SigninScreen },
  {
    url: "/v1/category",
    protected: false,
    component: SpecificCategoryScreen,
  },
  {
    url: "/v1/cart",
    protected: false,
    component: CartScreen,
  },
  {
    url: "/v1/user/profile",
    protected: true,
    component: ProfileScreen,
  },
  {
    url: "/",
    protected: false,
    component: HomeScreen,
  },
];
