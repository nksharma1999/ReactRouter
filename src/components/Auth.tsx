import React, { useContext, createContext } from "react";

type contextValues = {
  user: string | null;
  login: (user: string) => void;
  logOut: () => void;
};

const AuthContext = createContext<contextValues | null>(null);
interface props {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<props> = ({ children }: props) => {
  const [user, setUser] = React.useState<string | null>(null);
  const login = (userData: string) => {
    setUser(userData);
  };
  const logOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Out Of Context");
  return context;
};

export { useAuth, AuthProvider };
