import React from 'react'
import HOC from './HOC'

function Child(props) {
    return (
        <>
            <h1>The Child Component</h1>
            <h2>Name:{props.name}</h2>
            <h2>Address:{props.address}</h2>
            <h3>{props.count}</h3>
            <hr />
        </>
    )
}

const NewComponent = HOC(Child)

export default NewComponent
