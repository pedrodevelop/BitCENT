import { Transaction, TransactionType } from "@/logic/core/finance";
import {
  IconArrowsDoubleSwNe,
  IconCash,
  IconCreditCard,
} from "@tabler/icons-react";
import SummaryItem from "./SummaryItem";

interface ISummaryProps {
  transactions: Transaction[];
  className?: string;
}

const Summary: React.FC<ISummaryProps> = ({ transactions }) => {
  const totalize = (total: number, r: Transaction) => total + r.value;

  const receipts = transactions
    .filter((r) => r.type === TransactionType.INCOME)
    .reduce(totalize, 0);

  const costs = transactions
    .filter((r) => r.type === TransactionType.COST)
    .reduce(totalize, 0);

  const total = receipts - costs;

  return (
    <div
      className={`
            grid grid-cols-1 md:grid-cols-3 gap-4
        `}
    >
      <SummaryItem
        title="Receitas"
        value={receipts}
        icon={<IconCash />}
        classNameIcon="text-green-500"
      />
      <SummaryItem
        title="Despesas"
        value={costs}
        icon={<IconCreditCard />}
        classNameIcon="text-red-500"
      />
      <SummaryItem
        title="Total"
        value={total}
        icon={<IconArrowsDoubleSwNe />}
        classNameIcon="text-yellow-500"
        classNameValue={
          total > 0 ? "text-green-500" : total < 0 ? "text-red-500" : ""
        }
      />
    </div>
  );
};

export default Summary;
