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

const AllCustomersScreen = lazy(() =>
  import("../breadcrumb-screens/all-customers-screen/all-customers-container")
);

const CreateFoodScreen = lazy(() =>
  import("../breadcrumb-screens/create-food-screen/create-food-container")
);

const SpecificOrderScreen = lazy(() =>
  import("../breadcrumb-screens/specific-order-screen/specific-order-container")
);

const AllOrdersScreen = lazy(() =>
  import("../breadcrumb-screens/all-orders-screen/all-orders-container")
);

export const breadCrumbRoutes = [
  {
    url: "/v1/user/profile/update-information",
    title: "My Profile",
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
    url: "/v1/user/profile/create-food",
    title: "Add a Food",
    component: CreateFoodScreen,
    role: "admin",
  },
  {
    url: "/v1/user/profile/all-orders",
    title: "All Orders",
    component: AllOrdersScreen,
    role: "admin",
  },
  {
    url: "/v1/user/profile/all-customer",
    title: "All Customers",
    component: AllCustomersScreen,
    role: "admin",
  },
  {
    url: "/v1/user/profile/order/:orderId",
    component: SpecificOrderScreen,
  },
];
