import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import {
  Transaction,
  saveTransaction,
  getTransaction,
  deleteTransaction,
} from "@/logic/core/finance";

const UseTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const { user } = useContext(AuthContext);

  const getTransactions = async () => {
    if (!user) return;
    const transactions = await getTransaction(user);
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
  }, []);

  return {
    transactions,
    transaction,
    handleSaveTransaction,
    handleDeleteTransaction,
    select: setTransaction,
  };
};

export default UseTransaction;
