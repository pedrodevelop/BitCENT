import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import {
  Transaction,
  saveTransaction,
  deleteTransaction,
  getTransactionByMonth,
} from "@/logic/core/finance";

const UseTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const { user } = useContext(AuthContext);

  const getTransactions = async () => {
    if (!user) return;
    const transactions = await getTransactionByMonth(user, date);
    setTransactions(transactions);
  };

  const handleSaveTransaction = async (transaction: Transaction) => {
    if (!user) return;
    saveTransaction(transaction, user!);
    setTransaction(null);
    await getTransactions();
  };

  const handleDeleteTransaction = async (transaction: Transaction) => {
    if (!user) return;
    await deleteTransaction(transaction, user);
    setTransaction(null);
    await getTransactions();
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return {
    date,
    transactions,
    transaction,
    handleSaveTransaction,
    handleDeleteTransaction,
    select: setTransaction,
    changeDate: setDate,
  };
};

export default UseTransaction;
