import { useContext } from "react"
import { GlobalContext } from "../UseContext/UseContext"


const Balance = () => {

  const {transactions} = useContext(GlobalContext) 

  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((total,amount)=>(total+=amount),0).toFixed(2)


  return (
    <div className="balance">
        <h2>Your Balance</h2>
        <h3>${total}</h3>
    </div>
  )
}

export default Balance