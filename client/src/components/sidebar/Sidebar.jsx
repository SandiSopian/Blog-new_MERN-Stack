import "./sidebar.css";
import IMG3 from "../../assets/img(3).jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="sidebarImg" src={IMG3} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora harum culpa sint temporibus saepe, laborum nihil explicabo asperiores dicta, a, quia eum porro ad soluta eligendi neque accusantium fuga!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-github-square"></i>
          <i className="sidebarIcon fa-brands fa-medium"></i>
          <i className="sidebarIcon fa-brands fa-dribbble-square"></i>
        </div>
      </div>
    </div>
  );
}
