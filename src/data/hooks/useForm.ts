import { useState } from "react";

/** A hook to centralize form events */
const useForm = <T = any>(initialData?: T) => {
  const [data, setData] = useState(initialData ?? {} as T);

  const changeAttrValue = (attr: string, fn?: Function) => {
    return (value: any) => {
      const v = value?.target?.value ?? value;
      setData({ ...data, [attr]: fn?.(v) ?? v });
    };
  };

  return {
    data,
    setData,
    changeAttrValue,
  };
};

export default useForm;
