import React from 'react'
import Child1 from './Child1'
import { StudentContextWrapper } from './Student'
function App() {
  return (
    <div>
       <StudentContextWrapper>
        <Child1></Child1>
       </StudentContextWrapper>
       
    </div>
  )
}

export default App