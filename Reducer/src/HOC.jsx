import React, { useState } from 'react'

function HOC(CallbackComponent) {
    //HOC logic
    const ModifiedComponent = (props) => {
        const [count, setCount] = useState(0)
        //returned component logic
        let additionalProps = {}
        //Child
        if (props.name == "Virat") {
            additionalProps.address = "Delhi"
        }
        else if (props.name == "Rohit") {
            additionalProps.address = "Mumbai"
        }
        //Child2
        if (props.age) {
            if (props.age > 18) {
                additionalProps.isEligible = true
            } else {
                additionalProps.isEligible = false
            }
        }
        return (
            <>
                <CallbackComponent {...additionalProps}
                    {...props} count={count} />
            </>
        )
    }
    return ModifiedComponent
}

export default HOC