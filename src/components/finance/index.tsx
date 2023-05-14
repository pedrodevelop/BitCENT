import { useState } from "react";
import Header from "../template/Header";
import Page from "../template/Page";
import Content from "../template/Content";
import Transaction from "@/logic/core/finance/Transaction";
import List from "./List";
import fakeTransactions from "@/data/constants/fakeTransactions";

const Finance: React.FC = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(fakeTransactions);
  return (
    <Page>
      <Header />
      <Content>
        <List transactions={transactions} />
      </Content>
    </Page>
  );
};

export default Finance;
