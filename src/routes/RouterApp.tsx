import React, { FC } from 'react';
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'


const RouterApp: FC = () => {

  const isAuth = true;

  return (
    <div>
      <Routes>
        {routes.map(route => {
          if (route.auth && !isAuth) {
            return false
          }
          return (
            <Route key={route.path} path={route.path} element={
              <Layout>
                <route.element />
              </Layout>
            } />
          )
        })}
      </Routes>
    </div>
  )
}

export default RouterApp
