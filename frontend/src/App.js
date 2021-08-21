import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import { mainViewRoutes } from "./routes/main-view";
const ProtectedRoute = lazy(() => import("./routes/protected-routes"));

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <main>
            <Switch>
              {mainViewRoutes.map((route, index) => {
                return route.protected ? (
                  <ProtectedRoute
                    component={route.component}
                    path={route.url}
                    key={index}
                  />
                ) : (
                  <Route
                    path={route.url}
                    component={route.component}
                    key={index}
                  />
                );
              })}
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
