import createUuid from "@/logic/core/shared/Id";
import { TransactionType } from "@/logic/core/finance/TransactionType";
import Transaction from "@/logic/core/finance/Transaction";

const fakeTransactions: Transaction[] = [
  {
    id: createUuid(),
    description: "Salário",
    date: new Date(2023, 4, 1),
    value: 7123.34,
    type: TransactionType.INCOME,
  },
  {
    id: createUuid(),
    description: "Conta de Luz",
    value: 320.0,
    date: new Date(2023, 4, 3),
    type: TransactionType.COST,
  },
  {
    id: createUuid(),
    description: "Aluguel + Cond.",
    value: 1817.59,
    date: new Date(2023, 4, 3),
    type: TransactionType.COST,
  },
  {
    id: createUuid(),
    description: "Cartão de Crédito",
    value: 2200.0,
    date: new Date(2023, 4, 10),
    type: TransactionType.COST,
  },
  {
    id: createUuid(),
    description: "Conta de Água",
    value: 174.35,
    date: new Date(2023, 4, 8),
    type: TransactionType.COST,
  },
  {
    id: createUuid(),
    description: "Mensalidade MBA",
    value: 750.0,
    date: new Date(2023, 4, 2),
    type: TransactionType.COST,
  },

  {
    id: createUuid(),
    description: "Investimentos",
    date: new Date(2023, 4, 1),
    value: 2123.34,
    type: TransactionType.INCOME,
  },
];

export default fakeTransactions;
