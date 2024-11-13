

const AddTransaction = () => {
  return (
    <div className="addTr">
        <h2>Add Transaction</h2>
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text"/>
        <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
        <input type="number"/>
        <button className="addBtn">Add Transaction</button>
    </div>
  )
}

export default AddTransaction