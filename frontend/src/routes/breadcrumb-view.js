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
  },
  {
    url: "/v1/user/profile/my-orders",
    title: "My Orders",
    component: MyOrdersScreen,
  },
  {
    url: "/v1/user/profile/favourite-dishes",
    title: "Favourite Dishes",
    component: FavouriteDishesScreen,
  },
];
