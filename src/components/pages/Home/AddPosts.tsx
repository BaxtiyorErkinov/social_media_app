import React, { FC, useState, KeyboardEvent, useEffect } from "react";
import { TextField, Box, Alert } from "@mui/material";
import { TypeSetState, IPost } from "../../../types";
import { userData } from "../../../usersData";
import { useAuth } from "../../../hooks/useAuth";
import { collection, addDoc,onSnapshot } from 'firebase/firestore'



const AddPosts: FC = () => {
  const [content, setContent] = useState<string>("");
  const [errorMess, setErrorMess] = useState<string>("");
  const { user, db } = useAuth();

  const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          author: user,
          content,
          createdAt: "5mins left"
        })
        
      } catch (e: any) {
        setErrorMess(e)
      }
    }
  };

  return (
    <>
      {errorMess && <Alert severity="error">{errorMess}</Alert>}
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
    </>
  );
};

export default AddPosts;
