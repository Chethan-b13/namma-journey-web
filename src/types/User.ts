export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  firebaseUID: string;
  profilePic?: string;
  role: string[];
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}