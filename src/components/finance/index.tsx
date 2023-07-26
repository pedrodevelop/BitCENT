import { Header, Page, Content, NotFound, DayAndMonthField } from "../template";
import { NullTransaction } from "@/logic/core/finance";
import List from "./List";
import Form from "./Form";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import UseTransaction from "@/data/hooks/useTransaction";

const Finance: React.FC = () => {
  const {
    date,
    transaction,
    transactions,
    select,
    handleDeleteTransaction,
    handleSaveTransaction,
    changeDate,
  } = UseTransaction();
  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <div className="flex justify-between">
          <DayAndMonthField date={date} hasDateChange={changeDate} />
          <Button
            className="bg-blue-500"
            leftIcon={<IconPlus />}
            onClick={() => select(NullTransaction)}
          >
            Nova transação
          </Button>
        </div>
        {transaction ? (
          <Form
            transaction={transaction}
            cancel={() => select(null)}
            saveTransaction={handleSaveTransaction}
            deleteTransaction={handleDeleteTransaction}
          />
        ) : transactions.length ? (
          <List transactions={transactions} selectTransaction={select} />
        ) : (
          <NotFound>Nenhuma transação encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
};

export default Finance;
