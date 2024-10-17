import React from 'react'
import HOC from './HOC'

function Child2(props) {
    return (
        <>
            <h1>{props.age}</h1>
            <h2>{props.isEligible ?
                "User can vote" :
                "User can not vote"}</h2>
        </>
    )
}

const NewComponent2 = HOC(Child2)

export default NewComponent2