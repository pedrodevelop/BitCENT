const _language = "pt-BR";
const _coin = "BRL";

export const FormatMoney = (value: number): string => {
  return (value ?? 0).toLocaleString(_language, {
    style: "currency",
    currency: _coin,
  });
};

export const DesformatMoney = (value: string): number => {
  const formatedValueToNumber = value.replace(/[^0-9]+/g, "");
  const finalValue = formatedValueToNumber.length - 2;
  return Number(
    `${formatedValueToNumber.substring(
      0,
      finalValue
    )}.${formatedValueToNumber.substring(finalValue)}`
  );
};
