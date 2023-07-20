/**
 * A function to check if a text length is between a min and
 * a max number of characters
 * @param value The text that will be checked
 * @param min The minimum length of the text
 * @param max The maximum length of the text
 * @param trim A boolean to check if the blank spaces will be 
 * considered or not
 * @returns A boolean value based on text length
 */
export const isBetween = (
  value: string,
  min: number,
  max: number,
  trim: boolean = true
): boolean => {
  const finalValue = (trim ? value?.trim?.() : value) ?? "";
  return finalValue.length >= min && finalValue.length <= max;
};
