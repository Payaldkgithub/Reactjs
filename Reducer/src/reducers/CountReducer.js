//reducer function
function countReducer(state, action) {
    // console.log(action);
    switch (action.type) {
        case "inc1":
            return state + 1;
        case "dec1":
            return state - 1;
        case "inc5":
            return state + 5;
        case "dec5":
            return state - 5;
        case "inc10":
            return state + 10;
        case "dec10":
            return state - 10;
        case "input":
            return state + Math.trunc(action.payload)
        default:
            return state
    }
}

export default countReducer