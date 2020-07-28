import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {getError} from '../config/firebase';

export interface IAuth {
  email: string;
  password: string;
}

/**
 *
 * @param email email credential
 * @param password password credential
 * @return error string if exists
 */
export const signIn = async (
  email: string,
  password: string,
): Promise<boolean | string> => {
  if (/^(?!.)/s.test(email) || /^(?!.)/s.test(password)) {
    return null;
  }

  try {
    await auth().signInWithEmailAndPassword(email, password);
    return false;
  } catch (error) {
    return error;
  }
};

export const signOut = async () => {
  await auth().signOut();

  console.log(' < User signed OUT!');
};
