import React, { FC } from "react";
import { routes } from "./routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuth } from "../hooks/useAuth";
import Auth from "../components/pages/Auth";

const RouterApp: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAuth = true;

  return (
    <div>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  {route.auth && !user ? <Auth /> : <route.element />}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default RouterApp;
