import { useContext } from "react"
import { GlobalContext } from "../UseContext/UseContext"


const IncExp = () => {

  const {transactions} = useContext(GlobalContext) 

  const amount = transactions.map(transaction => transaction.amount)
  const income = amount.filter(amount=>amount>0).
                        reduce((total,amount)=>(total+=amount),0).
                        toFixed(2)

  const expense = amount.filter(amount=>amount<0).
                        reduce((total,amount)=>(total+=amount),0).
                        toFixed(2)

  return (
    <div className="inc-exp">
        <div className="income">
            <p>income</p>
            <p>+{income}</p>
        </div>
        <div className="expense">
            <p>expense</p>
            <p>-${Math.abs(parseInt(expense))}</p>
        </div>
    </div>
  )
}

export default IncExp