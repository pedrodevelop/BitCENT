import createUuid from "@/logic/core/shared/Id";
import {
  DocumentData,
  DocumentSnapshot,
  OrderByDirection,
  QueryConstraint,
  WhereFilterOp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import app from "../config/app";

export interface Filter {
  attr: string;
  op: WhereFilterOp;
  value: any;
}

/** Converts a firebase date timestamp to a Javascript date format
 * @param snapshot Firebase document snapshot
 */
const _convertFromFirebase = (snapshot: DocumentSnapshot<DocumentData>) => {
  if (!snapshot.exists()) return null;
  const entity: any = { ...snapshot.data(), id: snapshot.id };
  if (!entity) return entity;
  return Object.keys(entity).reduce((obj: any, attr: string) => {
    const value: any = entity[attr];
    return { ...obj, [attr]: value.toDate?.() ?? value };
  }, {});
};

/** Inserts a new document on firestore
 * @param path Firebase document path
 * @param entity Firebase entity object
 * @param id Document id, if not specified,
 * Firebase will create a random id
 * @returns A Promise that will be resolved with a new doc
 * at firestore database
 */
export const saveFbDoc = async (
  path: string,
  entity: any,
  id?: string
): Promise<any> => {
  const db = getFirestore(app);
  const finalId = id ?? entity.id ?? createUuid();
  const docRef = doc(db, path, finalId);
  await setDoc(docRef, entity);

  return {
    ...entity,
    id: entity.id ?? finalId,
  };
};

/** Deletes a firestore document
 * @param path Firebase document path
 * @param id Firebase document id
 * @returns A Promise that will be resolved after
 * delete a doc at firestore database
 */
export const deleteFbDoc = async (
  path: string,
  id?: string
): Promise<boolean> => {
  if (!id) return false;
  const db = getFirestore(app);
  const docRef = doc(db, path, id);
  const docData = await getDoc(docRef);
  if (!docData.exists()) return false;
  await deleteDoc(docRef);
  return true;
};

/** Creates a firestore query
 * @param path Firebase document path
 * @param orderByFilter The field to be used for sorting
 * @param direction The ordernation direction, default is 'asc'
 * @returns A Promise that will be resolved with the converted results of the query.
 */
export const querySearch = async (
  path: string,
  orderByFilter?: string,
  direction?: OrderByDirection
): Promise<any[]> => {
  const db = getFirestore(app);
  const collectionRef = collection(db, path);
  const filter: QueryConstraint[] = [];
  const ordernation = orderByFilter
    ? [orderBy(orderByFilter ?? "", direction)]
    : [];
  const _query = query(collectionRef, ...filter, ...ordernation);
  const result = await getDocs(_query);
  return result.docs.map(_convertFromFirebase) ?? [];
};

/** Get a Firebase document from id
 * @param path Firebase document path
 * @param id Firebase document id
 * @returns A Promise that will be resolved with
 * a converted DocumentSnapshot containing the current
 * document contents.
 */
export const searchById = async (path: string, id: string): Promise<any> => {
  if (!id) return null;
  const db = getFirestore(app);
  const docRef = doc(db, path, id);
  const result = await getDoc(docRef);
  return _convertFromFirebase(result);
};

/** Does a firebase query search with filters
 * @param path Firebase document path
 * @param filters An array of filters that will be
 * used for filter documents
 * @param orderByFilter The field to be used for sorting
 * @param direction The ordernation direction, default is 'asc'
 * @returns A Promise that will be resolved with the converted results of the query.
 */
export const searchWithFilters = async (
  path: string,
  filters: Filter[],
  orderByFilter?: string,
  direction?: OrderByDirection
): Promise<any[]> => {
  const db = getFirestore(app);
  const collectionRef = collection(db, path);

  const whereFilters = filters?.map((f) => where(f.attr, f.op, f.value)) ?? [];
  const ordenation = orderByFilter ? [orderBy(orderByFilter, direction)] : [];

  const _query = query(collectionRef, ...whereFilters, ...ordenation);
  const result = await getDocs(_query);
  return result.docs.map(_convertFromFirebase) ?? [];
};
