import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../Helper";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${BASE_URL}/api/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://images.pexels.com/photos/15569150/pexels-photo-15569150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque?
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CAEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c, index) => {
              return (
                <NavLink to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem" id={index}>
                    {c.name}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
