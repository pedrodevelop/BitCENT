import {
  querySearch,
  saveFbDoc,
  deleteFbDoc,
  searchWithFilters,
} from "@/logic/firebase/db/Collection";
import { Transaction } from "./index";
import User from "../user/User";

/** Adds a new transaction document to the Firestore database
 * @param transaction The transaction object that will be created
 * @param user The user that created the transaction document
 */
export const saveTransaction = async (transaction: Transaction, user: User) => {
  return saveFbDoc(`finances/${user.email}/transactions`, transaction);
};

/** Retrieves all Firestore transaction documents
 * @param user The user that created the transaction document
 */
export const getTransaction = async (user: User) => {
  const path = `finances/${user.email}/transactions`;
  return await querySearch(path, "date", "desc");
};

/** Deletes a Firestore transaction document
 * @param transaction The transaction document that will be deleted
 * @param user The user that created the transaction document
 */
export const deleteTransaction = async (
  transaction: Transaction,
  user: User
) => {
  return deleteFbDoc(`finances/${user.email}/transactions`, transaction.id);
};

// const getTransactionByMonth = async (user: User, date: Date) => {
//   const caminho = `financas/${user.email}/transacoes`;
//   return await searchWithFilters(caminho, [
//     { attr: "data", op: ">=", value: Date.primeiroDia(date) },
//     { attr: "data", op: "<=", value: Date.ultimoDia(date) },
//   ]);
// };
