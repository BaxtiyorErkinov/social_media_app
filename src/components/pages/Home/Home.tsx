import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import { initialPosts } from "./initialPosts";

//Components
import AddPosts from "./AddPosts";
import Posts from "./Posts";

// Types
import { IPost } from "../../../types";

const Home: FC = () => {
  return (
    <Box>
      <AddPosts />
      <Posts />
    </Box>
  );
};

export default Home;
