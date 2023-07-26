import {
  querySearch,
  saveFbDoc,
  deleteFbDoc,
  searchWithFilters,
} from "@/logic/firebase/db/Collection";
import { Transaction } from "./index";
import User from "../user/User";
import { firstDay, lastDay } from "@/logic/utils";

/** Adds a new transaction document to the Firestore database
 * @param transaction The transaction object that will be created
 * @param user The user that created the transaction document
 */
export const saveTransaction = async (transaction: Transaction, user: User) => {
  return saveFbDoc(`finances/${user.email}/transactions`, transaction);
};

/** Retrieves all Firestore transaction documents
 * @param user The user that created the transaction document
 * @returns A Promise that will be resolved with all transaction documents
 */
export const getTransaction = async (user: User) => {
  const path = `finances/${user.email}/transactions`;
  return await querySearch(path, "date", "desc");
};

/** Deletes a Firestore transaction document
 * @param transaction The transaction document that will be deleted
 * @param user The user that created the transaction document
 * @returns A Promise that will be resolved after delete a doc at firestore database
 */
export const deleteTransaction = async (
  transaction: Transaction,
  user: User
) => {
  return deleteFbDoc(`finances/${user.email}/transactions`, transaction.id);
};

/** Retrieves Firebase transaction documents that are between a date range
 * @param user The user that created the transaction document
 * @param date Date interface
 * @returns A promise that will be resolved with transaction documents
 * that are between a date range
 */
export const getTransactionByMonth = async (user: User, date: Date) => {
  const path = `finances/${user.email}/transactions`;
  return await searchWithFilters(path, [
    { attr: "date", op: ">=", value: firstDay(date) },
    { attr: "date", op: "<=", value: lastDay(date) },
  ]);
};
