import { useState } from "react";
import Header from "../template/Header";
import Page from "../template/Page";
import Content from "../template/Content";

const Finance: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(fakeTransactions)
  return (
    <Page>
      <Header />
      <Content>
        <List/>
      </Content>
    </Page>
  );
};

export default Finance;
