
import './App.css';
import First from "./First";
// import {Second,Third,Children} from "./First";
import Fourth from './Third';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';
import FunctionComponent from './Function';
import ClassComponent from './Class';
import ControlledFunction from './ControlledFunction';
import ControlledClass from './ControlledClass';
import UncontrolledFunction from './UncontrolledFunction';
import { UncontrolledForm } from './UncontrolledFunction';
import  Fragment  from './Fragment'
import ConditionalRendering from './ConditionalRendering';




function App() {
  let msg="Using props in class based component"
  let message="Using props in function based component"
  function getAddress(data){
    console.log(data);
  }
  return (
    <>
      <Fragment></Fragment>
      <ConditionalRendering/>
      <UncontrolledForm></UncontrolledForm>
      <UncontrolledFunction></UncontrolledFunction>
      <ControlledClass></ControlledClass>
      <ControlledFunction></ControlledFunction>
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent>
      <Child4></Child4>
      <Child3></Child3>
      <Child2></Child2>
      <Child name="PAYAL" getAddress={getAddress}></Child>
      <h1>This is my First React App</h1>
     <First name="Kevin" address="Banglore" msg={message}></First>
     {/* <Second></Second> */}
     {/* <Third></Third> */}
     <Fourth name="Payal" age={10} msg={msg}></Fourth>
     {/* <Children>{"Hello Jspider"}
      {"Welcome to React class"}
     </Children> */}
     </>
    
      );
}


export default App;

