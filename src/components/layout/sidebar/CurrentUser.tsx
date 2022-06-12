import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Avatar, Card, Button, Chip } from "@mui/material";
import { signOut } from "firebase/auth";

const CurrentUser = () => {
  const { user, ga } = useAuth();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        border: "none",
        borderRadius: 3,
        backgroundColor: "#F1F7FA",
        marginBottom: 5
      }}
    >
      <Chip
        avatar={<Avatar alt="" src={user?.avatar} />}
        label={user?.name || "No Name"}
        variant="outlined"
        sx={{display: "flex", marginBottom: 2}}
      />
      <Button variant="outlined" onClick={() => signOut(ga)}>
        LOGOUT
      </Button>
    </Card>
  );
};

export default CurrentUser;
