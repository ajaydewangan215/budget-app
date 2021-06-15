import React from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import TransactionList from './TransactionList'
import AppContextProvider from '../context/AppContext'

const Budget = () => {
    return (
        <AppContextProvider>
            <div className="container">
                <h1>Budget App</h1>
                <Balance />
                <AddTransaction />
                <TransactionList />
            </div>
        </AppContextProvider>
    )
}

export default Budget
