const _language = "pt-BR";
const _coin = "BRL";

/** A function to format money to local coin
 * @param value The money value in a string format that
 * will be formatted
 * @returns A formatted money value based in locale
 */
export const FormatMoney = (value: number): string => {
  return (value ?? 0).toLocaleString(_language, {
    style: "currency",
    currency: _coin,
  });
};

/** A function to desformat money value to only numbers
 * @param value The money number in a string format
 * @returns Money value without punctuation
 */
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
