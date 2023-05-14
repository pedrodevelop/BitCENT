import Transaction from "@/logic/core/finance/Transaction";
import FormatDdmmyy from "@/logic/utils/Date";
import Format from "@/logic/utils/Money";

interface IList {
  transactions: Transaction[];
}

const List: React.FC<IList> = ({ transactions }) => {
  const renderLine = (transaction: Transaction, index: number) => {
    return (
      <div
        key={transaction.id}
        className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}
            `}
        onClick={() => {}}
      >
        {/* {renderizarTipo(transaction)} */}
        <span className="w-full md:w-1/2">{transaction.description}</span>
        <span className="hidden md:inline flex-1">
          {FormatDdmmyy(transaction.date)}
        </span>
        <span>{Format(transaction.value)}</span>
      </div>
    );
  };

  return <div>{transactions.map(renderLine)}</div>;
};

export default List;
