import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import { Box, Card, Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import { userData } from '../../../../usersData'
import "./users.css"

const UserItem: FC = () => {

  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        border: "none",
        borderRadius: 3,
        backgroundColor: "#F1F7FA"
      }}
    >
      {userData.map(user => (
        <Link to={`/profile/${user.id}`} className="userContainer" key={user.name}>
          <Box
            sx={{
              position: "relative",
              marginRight: 2,
              width: 50,
              height: 50,
              borderRadius: "50%",
            }}
          >
            <Avatar
              src={user.avatar}
              alt="user"
              sx={{ width: 48, height: 48 }}
            />
            {user.isInNetwork &&
              <Box
                sx={{
                  position: "absolute",
                  backgroundColor: "#4FB14F",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: "2px solid #F6F6F6",
                  bottom: 0,
                  right: 0,
                  zIndex: 10
                }}
              />
            }
          </Box>
          <span className="userName">{user.name}</span>
        </Link>
      ))}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/massage")}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  )
}

export default UserItem
