import React from "react";
import { NavLink } from "react-router-dom";
import "./post.css";
import { BASE_URL } from "../../Helper";

const Post = ({ post }) => {
  const PF = `${BASE_URL}/images/`;
  return (
    <>
      <div className="post">
        {post.photo && (
          <img className="postImg" src={PF + post.photo} alt="blog pic" />
        )}
        <div className="postInfo">
          <div className="postCats">
            {post.category.map((c, index) => {
              return (
                <span className="postCat" id={index}>
                  {c}
                </span>
              );
            })}
          </div>
          <NavLink to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </NavLink>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </>
  );
};

export default Post;
