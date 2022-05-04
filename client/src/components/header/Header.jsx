import "./header.css";
import IMG2 from "../../assets/img(2).jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Welcome to my blog</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={IMG2} alt="" />
      </div>
    </>
  );
}
