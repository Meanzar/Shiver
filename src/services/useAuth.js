import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!cookies.userToken);
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();
  
  const authCheck = useCallback(async () => { 
    try {
      const response = await fetch('http://localhost:4000/api/users/auth', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok && cookies) {
        const data = await response.json();
        setIsLoggedIn(true);
        setUserData(data);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error with the server', error);
      setIsLoggedIn(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    const data =  {
      email: email,
      password: password,
    }
    try {
      const response = await fetch('http://localhost:4000/api/users/signin', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();
        await authCheck(); 
        navigate('/');
        return data
      } else {
        alert('User or password do not match');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }, [authCheck, navigate, setCookie]);

  const logout = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        removeCookie('userToken', { path: '/' });
        setIsLoggedIn(false);
        setUserData(null);
        navigate('/signin');
      } else {
        throw new Error('Failed to log out');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [removeCookie, navigate]);

  useEffect(() => {
    authCheck(); 
  }, [authCheck]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
