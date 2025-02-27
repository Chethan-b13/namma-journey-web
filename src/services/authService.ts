import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { Dispatch } from "redux";
import { setUser, logout } from "@/store/slices/authSlice";
import {
  UserRegistrationData,
  mapFirebaseUserToBackendUser,
  User,
} from "@/types/UserTypes";
import api from "@/config/axios";

// Get user profile from backend
export const getUserProfile = async (): Promise<User> => {
  const response = await api.get("/users/me");
  return response.data;
};

// Register user in backend
export const registerUserInBackend = async (
  userData: UserRegistrationData
): Promise<User> => {
  const response = await api.post("/auth/register", userData);
  return response.data.user;
};

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export const emailSignUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await sendEmailVerification(userCredential.user);
  return userCredential.user;
};

export const emailLogin = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const phoneLogin = async (
  phoneNumber: string,
  recaptchaVerifier: RecaptchaVerifier
) => {
  const confirmationResult = await signInWithPhoneNumber(
    auth,
    phoneNumber,
    recaptchaVerifier
  );
  return confirmationResult;
};

export const handleGoogleAuth = async (
  dispatch: Dispatch,
  isSignUp: boolean = false
): Promise<void> => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (isSignUp) {
      // Register in backend for new users using the mapper function
      await registerUserInBackend(mapFirebaseUserToBackendUser(result.user));
    }

    const userProfile = await getUserProfile();
    dispatch(setUser(userProfile));
  } catch (error) {
    console.error("Google auth failed:", error);
    throw error;
  }
};

export const handleEmailSignUp = async (
  dispatch: Dispatch,
  email: string,
  password: string,
  userData: Partial<UserRegistrationData>
): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Use the mapper function for consistent user data structure
    await registerUserInBackend(
      mapFirebaseUserToBackendUser(userCredential.user, userData)
    );

    const userProfile = await getUserProfile();
    dispatch(setUser(userProfile));
  } catch (error) {
    console.error("Email signup failed:", error);
    throw error;
  }
};

export const handleEmailSignIn = async (
  dispatch: Dispatch,
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userProfile = await getUserProfile();
    dispatch(setUser(userProfile));
  } catch (error) {
    console.error("Email signin failed:", error);
    throw error;
  }
};

export const handleLogout = async (dispatch: Dispatch): Promise<void> => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
