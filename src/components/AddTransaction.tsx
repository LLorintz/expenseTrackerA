import { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "../UseContext/UseContext"


const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext)

  const [transaction,setTransaction]=useState('')
  const [transactionValue, setValue] = useState(0)

  const handleTransactionChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTransaction(e.target.value)
  }

  const handlevalueChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(parseInt(e.target.value))
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
    const newTransaction = {
      id:Math.floor(Math.random()*1000000),
      text:transaction,
      amount:transactionValue,
    } 
    addTransaction(newTransaction);
    setTransaction('');
    setValue(0);
  }

  return (
    <form onSubmit={handleSubmit} className="addTr">
        <h2>Add Transaction</h2>
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text" value={transaction} onChange={handleTransactionChange}/>
        <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
        <input type="number" value={transactionValue} onChange={handlevalueChange}/>
        <button className="addBtn">Add Transaction</button>
    </form>
  )
}

export default AddTransaction