import { createContext, FC, useState, useEffect, useMemo } from "react";
import { onAuthStateChanged, Auth, getAuth } from "firebase/auth";
import { IUser, TypeSetState } from "../../types";
import { userData } from "../../usersData";
import { app } from "../../firebase/";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth(app);
  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          id: authUser.uid,
          avatar: userData[1].avatar,
          name: authUser.displayName || "",
        });
      } else setUser(null)
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
    }),
    [user, ga]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
