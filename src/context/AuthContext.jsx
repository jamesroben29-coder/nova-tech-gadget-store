import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const CURRENT_USER_STORAGE_KEY = "nova-current-user";
const USERS_STORAGE_KEY = "nova-demo-users";

const getStoredValue = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getStoredValue(CURRENT_USER_STORAGE_KEY, null));
    setLoading(false);
  }, []);

  const signUp = (name, email, password) => {
    const users = getStoredValue(USERS_STORAGE_KEY, []);
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((registeredUser) => registeredUser.email === normalizedEmail)) {
      throw new Error("This email is already registered.");
    }

    const newUser = { id: Date.now(), name: name.trim(), email: normalizedEmail, password };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([...users, newUser]));
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  };

  const signIn = (email, password) => {
    const users = getStoredValue(USERS_STORAGE_KEY, []);
    const normalizedEmail = email.trim().toLowerCase();
    const foundUser = users.find(
      (registeredUser) => registeredUser.email === normalizedEmail && registeredUser.password === password,
    );

    if (!foundUser) {
      throw new Error("Invalid email or password.");
    }

    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const signOut = () => {
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
