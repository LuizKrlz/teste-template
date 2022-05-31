import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesLib,
  Navigate,
} from "react-router-dom";

import { isAuthenticated } from "./helpers/token";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const PrivateRoute = ({ children }: any) =>
  isAuthenticated() ? children : <Navigate to="/" />;

const Routes = () => (
  <Router>
    <RoutesLib>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </RoutesLib>
  </Router>
);

export default Routes;
