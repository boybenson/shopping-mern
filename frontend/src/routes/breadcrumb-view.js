import { lazy } from "react";
const UpdateInfoScreen = lazy(() =>
  import("../breadcrumb-screens/update-info-screen/update-info-container")
);

const FavouriteDishesScreen = lazy(() =>
  import(
    "../breadcrumb-screens/favourite-dishes-screen/favourite-dishes-container"
  )
);

const MyOrdersScreen = lazy(() =>
  import("../breadcrumb-screens/my-orders/my-orders-container")
);

export const breadCrumbRoutes = [
  {
    url: "/v1/user/profile/update-information",
    title: "Update Info.",
    component: UpdateInfoScreen,
    role: "both",
  },
  {
    url: "/v1/user/profile/my-orders",
    title: "My Orders",
    component: MyOrdersScreen,
    role: "customer",
  },
  {
    url: "/v1/user/profile/favourite-dishes",
    title: "Favourite Dishes",
    component: FavouriteDishesScreen,
    role: "customer",
  },
  {
    url: "/v1/user/profile/favourite-dishes",
    title: "Add a Food",
    component: FavouriteDishesScreen,
    role: "admin",
  },
  {
    url: "/v1/user/profile/favourite-dishes",
    title: "All Orders",
    component: FavouriteDishesScreen,
    role: "admin",
  },
  {
    url: "/v1/user/profile/favourite-dishes",
    title: "All Customers",
    component: FavouriteDishesScreen,
    role: "admin",
  },
];
