import AppUser from "@/logic/core/user/User";
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  User,
  onIdTokenChanged,
} from "firebase/auth";
import app from "../config/app";

let _auth: Auth = getAuth(app);

type NotifyUser = (user: AppUser | null) => void;

/** Converts a firebase User data to app User data
 * @param firebaseUser User data that comes from firebase
 * @returns A converted Firebase user data to the App user type
 */
const convertFirebaseUserToAppUser = (
  firebaseUser: User | null
): AppUser | null => {
  if (!firebaseUser?.email) return null;
  const alternativeName = firebaseUser.email!.split("@")[0];

  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName ?? alternativeName,
    email: firebaseUser.email,
    imageUrl: firebaseUser.photoURL ?? "",
  };
};

/** Monitor the user login information
 * @param notify A callback function to notify the app about
 * the user login information
 * @returns A callback function that will monitor any user login info
 */
export const monitorUser = (notify: NotifyUser) => {
  return onIdTokenChanged(_auth, async (firebaseUser) => {
    const user = convertFirebaseUserToAppUser(firebaseUser);
    notify(user);
  });
};

/** Popup to login with Google Provider 
 * @returns A Promisse that will be resolved with 
 * an user data
*/
export const googleLogin = async (): Promise<AppUser | null> => {
  const res = await signInWithPopup(_auth, new GoogleAuthProvider());
  return convertFirebaseUserToAppUser(res.user);
};

/** Logout an user 
 @returns A promisse that will be resolved with an user logout
*/
export const logout = async (): Promise<void> => {
  await signOut(_auth);
};
