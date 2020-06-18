import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function useAuth() {
  console.log(
    "im in auth.js inside context",
    AuthContext,
    "use-----Cotext",
    useContext
  );
  return useContext(AuthContext);
}
