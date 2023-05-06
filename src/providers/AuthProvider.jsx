import React, { createContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
      setLoading(true);
     return signOut(auth);
      // .then(() =>{})
      // .catch(error => {
      //   console.log(error.message)
      // })
    }
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
        console.log('logged in user inside auth state observer', loggedUser)
        setUser(loggedUser);
        setLoading(false);
      })

      return () =>{
        unsubscribe();
      }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider