import { useRef } from "react";
function UncontrolledFunction() {
  const data = useRef(0);
  console.log(data);
  function updateData() {
    data.current = data.current + 10;
    console.log(data);
  }
  const paraRef = useRef(null);
  function changePara() {
    console.log(paraRef);
    paraRef.current.innerHTML = "React is best UI Library";
  }
  return (
    <div>
      <h1>useRef hook</h1>
      <h1>{data.current}</h1>
      <button onClick={updateData}>Change Data</button>
      <p ref={paraRef}>JS is best language</p>
      <button onClick={changePara}>Change Paragraph</button>
    </div>
  );
}
function UncontrolledForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    console.log(usernameRef, passwordRef);
    console.log(username, password);
    e.target.reset();
  }
  return (
    <div>
      <h1>useRef() hook in Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}
export default UncontrolledFunction;
export { UncontrolledForm };
