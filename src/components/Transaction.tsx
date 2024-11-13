import { useContext } from "react";
import { GlobalContext } from "../UseContext/UseContext";

type transactionProps={
  id:number,
  text:string;
  amount:number;
}
const Transaction = (props:transactionProps) => {
const {deleteTransaction} = useContext(GlobalContext)
  return (
    <li className={props.amount>0 ? 'plus':'minus'}>
    {props.text}<span>${props.amount}</span><button onClick={()=>deleteTransaction(props.id)} className="deleteBtn">X</button>
</li>
  )
}

export default Transaction