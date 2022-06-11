import React, { FC, useState, KeyboardEvent } from "react";
import { TextField, Box } from "@mui/material";
import { TypeSetState, IPost } from "../../../types";
import { userData } from "../../../usersData";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPosts: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState<string>('');

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      setPosts((prev) => [
        {
          author: userData[0],
          content,
          createdAt: "5mins left",
        },
        ...prev
      ]);
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <TextField
        label="New Post ..."
        variant="outlined"
        InputProps={{
          sx: { borderRadius: "25px", bgcolor: "#f9f9f9" },
        }}
        sx={{ width: "100%" }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
      />
    </Box>
  );
};

export default AddPosts;