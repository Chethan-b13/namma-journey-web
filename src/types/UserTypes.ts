import { User as FirebaseUser } from "firebase/auth";

// Backend User type
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  firebaseUID: string;
  profilePic?: string;
  role: string[];
  onViewClick?: (user: User) => void;
}

// Type for user registration data
export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  firebaseUID: string;
  profilePic?: string;
  role?: string[];
}

// Auth state type for Redux
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Convert Firebase user to backend user format
export const mapFirebaseUserToBackendUser = (
  firebaseUser: FirebaseUser,
  additionalData?: Partial<UserRegistrationData>
): UserRegistrationData => {
  return {
    firstName:
      additionalData?.firstName ||
      firebaseUser.displayName?.split(" ")[0] ||
      "",
    lastName:
      additionalData?.lastName || firebaseUser.displayName?.split(" ")[1] || "",
    email: firebaseUser.email || "",
    firebaseUID: firebaseUser.uid,
    phone: additionalData?.phone || firebaseUser.phoneNumber || "",
    profilePic: additionalData?.profilePic || firebaseUser.photoURL || "",
    role: additionalData?.role || ["traveler"],
  };
};

export interface AdminUsersResponse {
  users: User[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}
