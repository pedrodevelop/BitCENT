/** A function to format date timestamp to a local date string
 * @param dt The date timestamp
 * @param separator The element that will separate days months and years
 */
export const FormatDdmmyy = (dt: Date, separator: string = "/"): string => {
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  return `${day}${separator}${month}${separator}${dt.getFullYear()}`;
};
