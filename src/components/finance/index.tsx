import { useState } from "react";
import Header from "../template/Header";
import Page from "../template/Page";
import Content from "../template/Content";
import NotFound from "../template/NotFound";
import Transaction from "@/logic/core/finance/Transaction";
import Transaction from "@/logic/core/shared/Id";
import List from "./List";
import fakeTransactions from "@/data/constants/fakeTransactions";
import Form from "./Form";

const Finance: React.FC = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(fakeTransactions);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const handleSaveTransaction = (transaction: Transaction) => {
    const newTransactions = transactions.filter(
      (el) => el.id !== transaction.id
    );
    setTransactions([
      ...newTransactions,
      { ...transaction, id: transaction.id ?? createUuid() },
    ]);
    setTransaction(null);
  };

  const handleDeleteTransaction = (transaction: Transaction) => {
    const newTransactions = transactions.filter(
      (el) => el.id !== transaction.id
    );
    setTransactions(newTransactions);
    setTransaction(null);
  };

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <Button
          className="bg-blue-500"
          leftIcon={<IconPlus />}
          onClick={() => setTransaction(transacaoVazia)}
        >
          Nova transação
        </Button>
        {transaction ? (
          <Form
            transaction={transaction}
            cancel={() => setTransaction(null)}
            saveTransaction={handleSaveTransaction}
            deleteTransaction={handleDeleteTransaction}
          />
        ) : transactions.length ? (
          <List
            transactions={transactions}
            selectTransaction={setTransaction}
          />
        ) : (
          <NotFound>Nenhuma transação encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
};

export default Finance;
