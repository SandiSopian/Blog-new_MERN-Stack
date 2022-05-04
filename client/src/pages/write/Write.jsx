import "./write.css";
import IMG4 from "../../assets/img(4).jpg";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={IMG4} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" iplaceholder="Title" className="writeInput" autofocus="true" />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
