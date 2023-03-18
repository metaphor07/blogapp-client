import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";
import { BASE_URL } from "../../Helper";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = `${BASE_URL}/images/`;

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/" className="link">
                HOME
              </NavLink>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <NavLink to="/write" className="link">
                WRITE
              </NavLink>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <NavLink to="/settings">
              <img className="topImg" src={PF + user.profilepic} alt="" />
            </NavLink>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <NavLink to="/login" className="link">
                  LOGIN
                </NavLink>
              </li>

              <li className="topListItem">
                <NavLink to="/register" className="link">
                  REGISTER
                </NavLink>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
