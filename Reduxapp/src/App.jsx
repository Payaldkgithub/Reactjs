import React from 'react'
import Child from './Child'
import Child2 from './Child2'
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Child />
        <Child2 />
      </Provider>
    </>
  )
}

export default App