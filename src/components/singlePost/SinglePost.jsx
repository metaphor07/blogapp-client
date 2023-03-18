import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./SinglePost.css";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import { BASE_URL } from "../../Helper";

const SinglePost = () => {
  const location = useLocation();
  const PF = `${BASE_URL}/images/`;
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);

  const [post, setPost] = useState({});

  // these are used to store the update values of the blog
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${BASE_URL}/api/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path, updateMode]);

  const handleDelete = async (req, res) => {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${path}`, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/api/posts/${path}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload(); //it will refresh the page
      setUpdateMode(false);
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <NavLink to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </NavLink>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
