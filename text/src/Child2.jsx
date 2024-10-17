import "./Child2.css";
import image from "./123.jpg";
function Child2() {
  let mystyle = {
    color: "red",
    backgroundColor: "cyan",
    border: "1px dashed black",
    padding: "20px 40px",
    fontSize: "30px",
  };
  return (
    <div>
      <h1
        style={{
          color: "red",
          backgroundColor: "cyan",
          border: "1px dashed black",
          padding: "20px 40px",
        }}
      >
        Example
      </h1>
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2023/12/365695679/GL/DU/HU/20619026/9086614aee448043586a422bec08ced0-500x500.jpg"
        alt="Nature"
        height={"200px"}
        width={"300px"}
      ></img>
      &nbsp;&nbsp;
      <img src={image} alt="" height={"200px"} width={"300px"} />
      &nbsp;&nbsp;
      <img src="./kevin.jpg" alt="kevu" height={"200px"} width={"200px"} />
      <p style={mystyle}>Hello World!!!</p>
      <h1 id="abc">This is our External CSS</h1>
      <p className="xyz">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi deserunt
        itaque, et laboriosam sint fugit quas similique praesentium veniam
        numquam dicta nihil rem laudantium, unde mollitia non. Ut, labore
        consectetur.
      </p>
    </div>
  );
}
export default Child2;
