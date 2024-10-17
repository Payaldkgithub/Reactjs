
import './App.css';
// import countContext from './CountContext';
import {One} from './One';
import {Two} from './Two';
import{Three} from './Three';
import {Four} from './Four';
import Five from './Five';
import { Six } from './Six';
import Seven from './Seven';
import Eight from './Eight';
// import Child1 from './Child1';
import { UserConextWrapper } from './UserContext';
import Child4 from './Child4';


function App() {
  return (
     <div className='appDiv'>
      <UserConextWrapper><Child4></Child4></UserConextWrapper>
      {/* <countContext.Provider value={0}>
      <Child1></Child1>
      </countContext.Provider> */}
      
      <Eight></Eight>
        <Seven></Seven>
        <Six></Six>
        <Five></Five> 
        <One></One>
        <Two></Two>
        <Three></Three>
        <Four></Four>

     </div>
  )
}

export default App;
