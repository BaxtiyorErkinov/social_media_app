import React, { FC } from 'react';
import CurrentUser from './CurrentUser';
import UserItem from './users/UserItem'
import Menu from "./menu/"

const Sidebar: FC = () => {
  return (
    <div>
      <CurrentUser />
      <UserItem />
      <Menu />
    </div>
  )
};

export default Sidebar;
