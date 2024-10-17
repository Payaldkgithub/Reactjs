import { createContext, useContext } from "react";
import todoReducer from './reducers/TodoReducer'

const todoContext = createContext()


export const TodoContextWrapper = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return (
        <todoContext.Provider value={{ todos, dispatch }} >
            {children}
        </todoContext.Provider >
    )
}

export const useTodo = () => {
    return useContext(todoContext)
}