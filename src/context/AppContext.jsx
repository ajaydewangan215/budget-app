import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './AppReducer'

const initialState = {
    items:JSON.parse(localStorage.getItem('budgetlist')) || []
}
// Create a Context
export const BudgetContext = createContext()
// It returns an object with 2 values:
// { Provider, Consumer }

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)  
    
    const  AddData = data => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:data
        })
    }

    const  deleteItem = id => {
        dispatch({
            type:"DELETE_ITEM",
            payload:id
        })
    }

    const  deleteAll = () => {
        dispatch({
            type:"DELETE_ALL"
        })
    }

    useEffect(() => {
        localStorage.setItem("budgetlist",JSON.stringify(state.items))        
    }, [state.items])

    return (
        <>
            <BudgetContext.Provider value={{ ...state, AddData, deleteItem, deleteAll }}>
                {children}
            </BudgetContext.Provider>
        </>
    )
}

export default AppContextProvider
