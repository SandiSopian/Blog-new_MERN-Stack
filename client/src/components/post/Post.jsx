import "./post.css";
import IMG4 from "../../assets/img(4).jpg";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={IMG4} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Programming</span>
          <span className="postCategory">Web Design</span>
        </div>
        <Link to="/post/:postId" style={{ textDecoration: "none", color: "black" }}>
          <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </Link>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est alias tenetur maxime porro sunt, reprehenderit vero illum laborum provident soluta accusamus, saepe voluptatibus esse distinctio culpa! Maxime placeat quia
        itaque libero at reiciendis, incidunt voluptates nostrum amet, corporis atque dolore fuga veniam quas nam, molestiae perferendis nesciunt temporibus accusantium.
      </p>
    </div>
  );
}
