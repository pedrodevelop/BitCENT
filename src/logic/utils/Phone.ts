const _default = "(??) ?????-????";

/** A function to format numbers to a cellphone number string
 * @param value The cellphone number in a string format
 */
export const FormatCellphone = (value: string): string => {
  const nums = DesformatCellphone(value).split("");
  return nums
    .reduce((formatted: string, num: string) => {
      return formatted.replace("?", num);
    }, _default)
    .split("?")[0]
    .replace(/[()-]$/, "");
};

/** A function to desformat cellphone number to only numbers
 * @param value The cellphone number in a string format
 */
export const DesformatCellphone = (value: string): string => {
  return value.replace(/[^0-9]+/g, "");
};
