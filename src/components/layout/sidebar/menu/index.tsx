import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { menuItems } from "../../../../menuData";

const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        border: "none",
        borderRadius: 3,
        backgroundColor: "#F1F7FA",
        marginTop: 6,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem disablePadding key={item.id}>
            <ListItemButton onClick={() => navigate(item.link)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Menu;
