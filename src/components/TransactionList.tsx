import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);


  return (
    <div>
        <h3>History</h3>
      <ul id="list" className="list">
        {
            transactions.map( 
                transaction => (
                    <li className={ transaction.amount > 0 ? 'plus' : 'minus' } key = {transaction.id}>
                        {transaction.text} <span>{ transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span>
                        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                    </li> 
                )
            )
        }
        
      </ul>
    </div>
  )
}
