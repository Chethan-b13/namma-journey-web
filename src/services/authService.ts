import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { registerUser } from "@/app/api/authApis";
import { Dispatch } from "redux";

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

export const logout = async () => {
  await signOut(auth);
  localStorage.removeItem("authToken");
};

export const handleGoogleLogin = async (
  dispatch: Dispatch<any>,
  router: any
): Promise<void> => {
  try {
    const user = await googleLogin();
    const token = await user.getIdToken();
    localStorage.setItem("authToken", token);

    const firstName = user.displayName?.split(" ")[0] || "";
    const lastName = user.displayName?.split(" ")[1] || "";

    await registerUser(
      {
        firstName: firstName,
        lastName: lastName,
        email: user.email || "",
        firebaseUID: user.uid || "",
        phone: "+919876543210",
        role: ["admin"],
      },
      dispatch
    );
    router.push("/");
  } catch (error) {
    console.error("Google Login Failed:", error);
  }
};
