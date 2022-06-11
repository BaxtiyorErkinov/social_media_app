import React, { FC } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { Grid } from '@mui/material';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
