function First(props) {
  const { name, address, msg } = props;
  return (
    <div>
      {/* {console.log("we have to use curly braces to write js code inside JSX")} */}
      {/* we can't use for inside JSX {for(i=0;i<=10;i++{
       console.log(i);
     })} */}
      {
        //we can,t use conditional statement inside JSX
        // if(10>20{
        //   <h1>10 is greater</h1>
        // })
        // 10 > 20 ? <h2>10 is greater</h2> : <h2>20 is greater</h2>
      }
      <h2>{msg}</h2>
      <h2>Name={name}</h2>
      <h2>Address={address}</h2>
    </div>
  );
}
function Second() {
  function displayMsg() {
    console.log("btn is clicked");
  }
  return (
    <div>
      <p>class become ClassName And for become htmlFor</p>
      <div className="heading">
        <h1>Heading</h1>
      </div>
      <label htmlFor="">UserName</label>
      <input type="text" />
      <button onClick={displayMsg}>Click Here</button>
    </div>
  );
}
const Third = () => {
  if (50 > 100) return <h1>If block is executed</h1>;
  else return <h1>Else block is executed</h1>;
};
const Children = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h2>This is an example of children props</h2>
      <h2>{children[0]}</h2>
      <h2>{children[1]}</h2>
    </div>
  );
};
export default First;
export { Second, Third, Children };
