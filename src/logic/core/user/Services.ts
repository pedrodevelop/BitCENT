import {
  NotifyUser,
  googleLogin,
  logout,
  monitorUser,
} from "@/logic/firebase/auth/Auth";
import { saveFbDoc, searchById } from "@/logic/firebase/db/Collection";
import User from "./User";

/** Monitor the user login information
 * @param notify A callback function to notify the app about
 * the user login information
 * @returns A callback function that will monitor any user login info
 */
export const monitorAuth = (observer: NotifyUser) => {
  return monitorUser(async (user) => {
    observer(
      user
        ? {
            ...user,
            ...(await getUser(user.email)),
          }
        : null
    );
  });
};

/** Logout an user 
 @returns A promisse that will be resolved with an user logout
*/
export const logoutUser = (): Promise<void> => {
  return logout();
};

/** Adds a new user document to the Firestore database
 * @param user The user object that will be created
 * @returns A Promise that will be resolved with a new doc
 * at firestore database
 */
export const saveUser = async (user: User) => {
  return await saveFbDoc("/users", user, user.email);
};

/** Get a user document by user email
 * @param email The user email registered at Firestore
 * @returns A Promise that will be resolved with
 * a converted DocumentSnapshot containing the current
 * document contents.
 */
export const getUser = async (email: string) => {
  return await searchById("/users", email);
};

/** Login user using google provider
 * @returns A Promisse that will be resolved with
 * an user data
 */
export const loginWithGoogle = async (): Promise<User | null> => {
  const user = await googleLogin();
  if (!user) return null;

  let databaseUser = await getUser(user.email);
  if (!databaseUser) databaseUser = await saveUser(user);

  return { ...user, ...databaseUser };
};
