import "./sidebar.css";
import IMG3 from "../../assets/img(3).jpg";

export default function Sidebar() {
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
          <li className="sidebarListItem">Programming Language</li>
          <li className="sidebarListItem">Databases</li>
          <li className="sidebarListItem">Web Design</li>
          <li className="sidebarListItem">Framework</li>
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
