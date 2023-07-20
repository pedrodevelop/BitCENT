const _default = "???.???.???-??";

/** A function to format numbers to a cpf string
 * @param value The cpf number in a string format
 * @returns A formatted cpf string
 */
export const FormatCpf = (value: string): string => {
  const nums = DesformatCpf(value).split("");
  return nums
    .reduce((formatted: string, num: string) => {
      return formatted.replace("?", num);
    }, _default)
    .split("?")[0]
    .replace(/[-.]$/, "");
};

/** A function to desformat cpf to only numbers
 * @param value The cpf number in a string format
 * @returns A cpf string without punctuation
 */
export const DesformatCpf = (value: string): string => {
  return value.replace(/[^0-9]+/g, "");
};
