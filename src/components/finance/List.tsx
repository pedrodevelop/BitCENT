import Transaction from "@/logic/core/finance/Transasction";

interface ITransaction {
  transactions: Transaction[]
}

const Transaction : React.FC<ITransaction> = ({transactions}) => {
  return(
    <div>Teste</div>
  )
}