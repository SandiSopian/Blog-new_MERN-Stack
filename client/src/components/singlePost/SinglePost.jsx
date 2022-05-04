import "./singlePost.css";
import IMG5 from "../../assets/img(5).jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={IMG5} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>Author: Sandi Sopian</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam rem quidem recusandae? Placeat quidem iusto vitae cupiditate eaque sed iste voluptatibus aperiam accusamus? Accusantium, et. Quas culpa asperiores itaque delectus
          tempore laboriosam omnis voluptate assumenda vel dignissimos sed deserunt eaque, earum praesentium esse molestiae quo blanditiis dicta quidem inventore error voluptatem vitae! Molestias voluptatem quis adipisci sapiente velit rem
          corrupti nam! Tenetur, culpa? Sed in, nihil possimus commodi natus dicta voluptates voluptate eum officia amet quis, quia officiis qui necessitatibus labore architecto? Commodi minus repellat incidunt fugiat aliquam odio sequi
          debitis deleniti mollitia explicabo, aut, quisquam ipsa autem magnam ea eaque inventore! Totam molestias suscipit dolorum nobis, quo enim dicta quidem quia quis id dolores ullam architecto eius nihil repellendus libero qui.
          Corporis minus culpa, doloremque, aperiam quisquam accusantium amet dolorem perspiciatis tenetur suscipit reiciendis sequi omnis modi possimus impedit, exercitationem voluptates quos id ab consectetur non itaque ipsam rem. Quidem
          non perferendis porro tenetur minima aperiam fugiat laborum officiis, ea odio eaque, possimus suscipit, doloremque reiciendis commodi debitis. Explicabo, officia ex veritatis, suscipit ipsum nisi, tempora assumenda magni qui vero
          tempore quam? Doloribus facilis corporis odit magni nobis, suscipit libero quam consequatur eveniet a assumenda recusandae, facere unde itaque.
        </p>
      </div>
    </div>
  );
}
