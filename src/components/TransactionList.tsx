import { useContext } from "react"
import { GlobalContext } from "../UseContext/UseContext"
import Transaction from "./Transaction"

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <div className="list">
      <h2>History</h2>
        <ul>
            {transactions.map(transaction=>(
              <Transaction key={transaction.id} {...transaction}></Transaction>
            )
            )}
        </ul>
    </div>
  )
}

export default TransactionList