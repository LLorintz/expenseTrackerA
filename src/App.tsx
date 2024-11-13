import Header from "./components/Header"
import Balance from "./components/Balance"
import IncExp from "./components/IncExp"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import './app.css'
import GlobalProvider from "./UseContext/UseContext"

function App() {
  return (
    <div className="container">
    <GlobalProvider>
      <Header></Header>
      <Balance></Balance>
      <IncExp></IncExp>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </GlobalProvider>
    </div>
  )
}

export default App
