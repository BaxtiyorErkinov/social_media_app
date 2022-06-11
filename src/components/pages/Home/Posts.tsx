import React, { FC } from "react";
import { Box, Avatar, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { IPost } from "../../../types";

import "./posts.css"

interface IPostList {
  posts: IPost[];
}

const Posts: FC<IPostList> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: 2,
            marginTop: 4
          }}
          key={post.content}
        >
          <Link
            to={`/profile/${post.author.id}`}
            className="userContainer"
            key={post.author.name}
          >
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
                src={post.author.avatar}
                alt="user"
                sx={{ width: 48, height: 48 }}
              />
            </Box>
            <div>
              <div className="userName">{post.author.name}</div>
              <div className="date">{post.createdAt}</div>
            </div>
          </Link>
          <p>{post.content}</p>
          {post?.images?.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {post.images.map((img, index) => (
                <ImageListItem key={index}>
                  <img src={img} alt={img} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      ))}
    </>
  );
};

export default Posts;
