import React,  { useContext } from 'react'
import { BudgetContext } from '../context/AppContext'

const Balance = () => {
    const { items } = useContext(BudgetContext)
    const income = items.filter(item => { 
        return item.transactionType === 'Income'
    })
    const expense = items.filter(item => { 
        return item.transactionType === 'Expense'
    })

    const totalIncome = income.reduce( (accum, curVal) => {
        accum += Number(curVal.itemAmount)
        return accum
    }, 0).toFixed(2)

    const totalExpense = expense.reduce( (accum, curVal) => {
        accum += Number(curVal.itemAmount)
        return accum
    }, 0).toFixed(2)

    return (
        <div className="balance-box">
            <div className="income">
                <h3>Income</h3>
                <p>{totalIncome}</p>
            </div>
            <div className="expense">
                <h3>Expanse</h3>
                <p>{totalExpense}</p>
            </div>
            <div className="balance">
                <h3>Balance</h3>
                <p>{(totalIncome-totalExpense).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Balance
