const _language = "pt-BR";

/** A function to format date timestamp to a local date string
 * @param dt The date timestamp
 * @param separator The element that will separate days months and years
 * @returns A date in the format of 00/00/0000
 */
export const FormatDdmmyy = (dt: Date, separator: string = "/"): string => {
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  return `${day}${separator}${month}${separator}${dt.getFullYear()}`;
};

export const mmyy = {
  /** Format a date to a `month of year` format
   * @param dt Date interface
   * @param language Locale language
   * @returns A string in the `month of year` format
   */
  format(dt: Date, language?: string): string {
    return dt?.toLocaleDateString?.(language ?? _language, {
      month: "long",
      year: "numeric",
    } as Intl.DateTimeFormatOptions);
  },
};

export const ddmm = {
  /** Format a date to a `day of month` format
   * @param dt Date interface
   * @param language Locale language
   * @returns A string in the `day of month` format
   */
  format(dt: Date, language?: string): string {
    return dt?.toLocaleDateString?.(language ?? _language, {
      day: "2-digit",
      month: "short",
    } as Intl.DateTimeFormatOptions);
  },
};

/** Creates an array year months
 * @param language Locale language
 * @returns A array with all year months
 */
export const months = (language?: string) => {
  return Array(12)
    .fill(0)
    .map((_, i) =>
      new Date(2000, i, 1)
        .toLocaleDateString(language ?? _language, { month: "short" })
        .toUpperCase()
        .substring(0, 3)
    );
};

/** Get the first day of the month
 * @param dt Date interface
 * @returns The first day of a month
 */
export const firstDay = (dt: Date) => {
  return new Date(dt.getFullYear(), dt.getMonth(), 1);
};

/** Get the last day of the month
 * @param dt Date interface
 * @returns The last day of a month
 */
export const lastDay = (dt: Date) => {
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0, 23, 59, 59);
};
