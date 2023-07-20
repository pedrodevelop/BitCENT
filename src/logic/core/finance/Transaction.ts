import { TransactionType } from "./TransactionType";

export interface Transaction {
  id?: string;
  description: string;
  value: number;
  date: Date;
  type: TransactionType;
}

export const NullTransaction = {
  description: "",
  value: 0,
  date: new Date(),
  type: TransactionType.COST,
};
