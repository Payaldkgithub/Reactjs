const initialstate=0;
export  const changeTheNumber=(state=initialstate,action)=>{
    switch(action.type){
        case "INC":
        return state+1;
        case "DEC":
        return state-1;
        default:
        return state;
    }
}
