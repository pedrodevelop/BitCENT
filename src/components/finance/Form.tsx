import "dayjs/locale/pt-br";
import { useEffect } from "react";
import Transaction from "@/logic/core/finance/Transaction";
import { TransactionType } from "@/logic/core/finance/TransactionType";
import { FormatMoney, DesformatMoney } from "@/logic/utils/Money";
import { TextInput, Radio, Group, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import useForm from "@/data/hooks/useForm";

interface IForm {
  transaction: Transaction;
  cancel?: () => void;
  saveTransaction?: (transaction: Transaction) => void;
  deleteTransaction?: (transaction: Transaction) => void;
}

const Form: React.FC<IForm> = ({
  transaction,
  cancel,
  saveTransaction,
  deleteTransaction,
}) => {
  const { transactionData, changeAttrValue } = useForm(transaction);

  return (
    <div
      className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}
    >
      <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
      <div className="flex flex-col gap-4 p-4 sm:p-7">
        <TextInput
          label="Description"
          value={transactionData.description}
          onChange={changeAttrValue("description")}
        />
        <TextInput
          label="Value"
          value={FormatMoney(transactionData.value)}
          onChange={changeAttrValue("value", DesformatMoney)}
        />
        <DatePickerInput
          label="Date"
          value={transactionData.date}
          locale="pt-BR"
          valueFormat="DD/MM/YYYY"
          onChange={changeAttrValue("date")}
        />
        <Radio.Group
          value={transactionData.type}
          onChange={changeAttrValue("type")}
        >
          <Group>
            <Radio value={TransactionType.INCOME} label="Receita" />
            <Radio value={TransactionType.COST} label="Despesa" />
          </Group>
        </Radio.Group>
      </div>
      <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
        <Button
          className="bg-green-500"
          color="green"
          onClick={() => saveTransaction && saveTransaction(transactionData)}
        >
          Salvar
        </Button>
        <Button className="bg-zinc-500" color="gray" onClick={cancel}>
          Voltar
        </Button>
        <div className="flex-1"></div>
        {transaction.id && (
          <Button
            className="bg-red-500"
            color="red"
            onClick={() => deleteTransaction && deleteTransaction(transaction)}
          >
            Excluir
          </Button>
        )}
      </div>
    </div>
  );
};

export default Form;
