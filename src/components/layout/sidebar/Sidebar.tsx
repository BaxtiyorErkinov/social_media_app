import React, { FC } from 'react';
import UserItem from './users/UserItem'
import Menu from "./menu/"

const Sidebar: FC = () => {
  return (
    <div>
      <UserItem />
      <Menu />
    </div>
  )
};

export default Sidebar;
