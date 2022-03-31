import React, { FC } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { Grid } from '@mui/material';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container marginX={5} spacing={2} marginTop={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>        
      </Grid>
    </>
  );
};

export default Layout;
