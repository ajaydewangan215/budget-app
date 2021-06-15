import React, { useContext, useState } from 'react'
import { BudgetContext } from '../context/AppContext'

const AddTransaction = () => {
    const { AddData } = useContext(BudgetContext)
    
    const [transaction, setTransaction] = useState({
        transactionType:'Income', itemText:'', itemAmount:''
    })

    const {transactionType, itemText, itemAmount} = transaction
    const inputEvent = e => {
        setTransaction({...transaction, [e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault() 
         
        if(itemText && itemAmount){
            const newTransaction = { 
                id:new Date().getTime(),
                transactionType, 
                itemText,
                itemAmount
            }
            AddData(newTransaction)
            setTransaction({transactionType:'', itemText:'', itemAmount:''})
        }
    }

    return (
        <div className="form-wrapper">
            <form method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <select name="transactionType" onChange={inputEvent}>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <input 
                        type="text" 
                        name="itemText" 
                        placeholder="Add Item Description" 
                        autoComplete="off"
                        onChange={inputEvent}
                        value={transaction.itemText}
                    />
                    <input 
                        type="number" 
                        name="itemAmount" 
                        placeholder="Amount"
                        onChange={inputEvent} 
                        autoComplete="off"
                        value={transaction.itemAmount}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
