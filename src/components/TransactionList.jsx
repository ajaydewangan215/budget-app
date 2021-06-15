import React, { useContext } from 'react'
import Delete from '../delete.svg'
import { BudgetContext } from '../context/AppContext'

const TransactionList = () => {
    const { items, deleteItem, deleteAll } = useContext(BudgetContext)

    return (
        <>
            <div className="transaction-list">
                <h2>Transactions History</h2>
                <ul className="list">
                    {
                        items.map((element) => {
                            const { id, transactionType, itemText, itemAmount } = element
                            return (
                                <li className="list-item" key={id}>
                                    <span>{itemText}</span>
                                    <span>{transactionType}</span>
                                    <span>{itemAmount}</span>
                                    <img src={Delete} alt="delete-item" onClick={() => { if (window.confirm('Are you sure to delete this record?')) {deleteItem(id)} }} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                items.length ?
                    <div className="btn">
                        <button
                            className="button remove-all"
                            type="button"
                            data-hover="REMOVE ALL"
                            data-active="I'M ACTIVE"
                            onClick={() => {
                                if (window.confirm('Are you sure to delete All record?')) {
                                    deleteAll()
                                }
                            }
                            }><span>REMOVE ALL</span>
                        </button>
                    </div> :
                    ''
            }
        </>
    )
}

export default TransactionList