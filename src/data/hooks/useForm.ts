import Transaction from "@/logic/core/finance/Transaction";
import { useState } from "react";

const useForm = (initialTransactionData: Transaction) => {
  const [transactionData, setTransactionData] = useState(
    initialTransactionData
  );

  const changeAttrValue = (attr: string, fn?: Function) => {
    return (value: any) => {
      const v = value?.target?.value ?? value;
      setTransactionData({ ...transactionData, [attr]: fn?.(v) ?? v });
    };
  };

  return {
    transactionData,
    setTransactionData,
    changeAttrValue,
  };
};

export default useForm;
