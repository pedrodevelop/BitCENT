import {Transaction} from "@/logic/core/finance";
import { FormatDdmmyy, FormatMoney } from "@/logic/utils/";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface IListProps {
  transactions: Transaction[];
  selectTransaction?: (transaction: Transaction) => void;
}

const List: React.FC<IListProps> = ({ transactions, selectTransaction }) => {
  function renderType(transaction: Transaction) {
    return (
      <span
        className={`
              flex justify-center items-center 
              h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
              ${transaction.type === "receita" ? "bg-green-500" : "bg-red-500"}
          `}
      >
        {transaction.type === "receita" ? (
          <IconTrendingUp />
        ) : (
          <IconTrendingDown />
        )}
      </span>
    );
  }

  const renderLine = (transaction: Transaction, index: number) => {
    return (
      <div
        key={transaction.id}
        className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}
            `}
        onClick={() => selectTransaction && selectTransaction(transaction)}
      >
        {renderType(transaction)}
        <span className="w-full md:w-1/2">{transaction.description}</span>
        <span className="hidden md:inline flex-1">
          {FormatDdmmyy(transaction.date)}
        </span>
        <span>{FormatMoney(transaction.value)}</span>
      </div>
    );
  };

  return (
    <div
      className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}
    >
      {transactions.map(renderLine)}
    </div>
  );
};

export default List;
