import { setUser } from "@/store/slices/authSlice";

import api from "@/config/axios";
import { User } from "@/types/User";
import { Dispatch } from "react";

export const registerUser = async (userData: User, dispatch: Dispatch<any>) => {
  console.log(userData, "user data");

  const user = await api
    .post("/auth/register", {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      firebaseUID: userData.firebaseUID,
      phone: userData.phone,
      profilePic: userData.profilePic,
      role: userData.role,
    })
    .then((res) => {
      console.log(res.data, "res after register user");
      return res.data;
    })
    .catch((err) => {
      console.log(err, "error in register user");
    });

  // Assuming the API response includes user data and token
  console.log(user, "user after register");

  dispatch(
    setUser({
      firebaseUID: user.firebaseUID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      profilePic: user.profilePic,
      role: user.role,
    })
  );
};
