import { Header, Page, Content, NotFound, DayAndMonthField } from "../template";
import { NullTransaction } from "@/logic/core/finance";
import List from "./List";
import Form from "./Form";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import UseTransaction, { ExibitionType } from "@/data/hooks/useTransaction";
import { Grid } from "./Grid";
import Summary from "./Summary";

const Finance: React.FC = () => {
  const {
    date,
    transaction,
    transactions,
    exibitionType,
    select,
    changeExibitionType,
    handleDeleteTransaction,
    handleSaveTransaction,
    changeDate,
  } = UseTransaction();

  const renderControls = () => {
    return (
      <div className="flex justify-between">
        <DayAndMonthField date={date} hasDateChange={changeDate} />
        <div className="flex gap-5 ">
          <Button
            className="bg-blue-500"
            leftIcon={<IconPlus />}
            onClick={() => select(NullTransaction)}
          >
            Nova transação
          </Button>
          <SegmentedControl
            data={[
              { label: <IconList />, value: "list" },
              { label: <IconLayoutGrid />, value: "grid" },
            ]}
            onChange={(type) => changeExibitionType(type as ExibitionType)}
          />
        </div>
      </div>
    );
  };

  const renderTransactions = () => {
    return exibitionType == "list" ? (
      <List transactions={transactions} selectTransaction={select} />
    ) : (
      <Grid transactions={transactions} selectTransaction={select} />
    );
  };

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <Summary transactions={transactions} />
        {renderControls()}
        {transaction ? (
          <Form
            transaction={transaction}
            cancel={() => select(null)}
            saveTransaction={handleSaveTransaction}
            deleteTransaction={handleDeleteTransaction}
          />
        ) : transactions.length ? (
          renderTransactions()
        ) : (
          <NotFound>Nenhuma transação encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
};

export default Finance;
