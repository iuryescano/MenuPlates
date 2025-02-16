import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [ data , setData ] = useState({});

  async function signIn({ email, password }) {

      try {
        const response = await api.post("/sessions", { email, password });
        const { user, token } = response.data;

        localStorage.setItem("@MenuPlate:user", JSON.stringify(user));
        localStorage.setItem("@MenuPlate:token", token);

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({ user, token });

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao fazer login, tente novamente!");
        }
      }
  }

  function signOut() {
    localStorage.removeItem("@MenuPlate:user");
    localStorage.removeItem("@MenuPlate:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@MenuPlate:user");
    const token = localStorage.getItem("@MenuPlate:token");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
        signIn, 
        signOut,
        user: data.user
        }}>
      {children}
    </AuthContext.Provider>
  );
}

  function useAuth() {
    const context = useContext(AuthContext);

    return context;
  }

export { AuthProvider, useAuth };