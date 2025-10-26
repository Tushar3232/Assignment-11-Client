import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);



    // Create user with email and pass
    const CreateUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user with email and pass 
    const SigninUser = (email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    // Sign Out handle 
    const SignOutUser = ()=>{
        setLoding(true)
        return signOut(auth)
    }
 
    // Google Sign in 
    const GoogleSignin = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const loggedUser = result.user;
      const userData = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoURL: loggedUser.photoURL,
        role: 'user'
      };

      // ✅ Check user exists and save to MongoDB if new
      axios.post('https://assignment-11-server-bay-psi.vercel.app/signUp-user', userData)
        .then((res) => {
          console.log('User info saved (if new):', res.data);
        });

      return loggedUser;
    })
    .catch((error) => {
      console.error("Google Sign-In Error", error);
    });
};


    // Objerber setup 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoding(false);
            console.log('user in ths auth state change',user)
            console.log(currentUser)

            // apadoto delam _____ ____ ____------____------___----|
            axios.get("https://assignment-11-server-bay-psi.vercel.app",{
                headers:{
                    Authorization:`Bearer ${currentUser.accessToken}`
                }
            })

        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        loding,
        CreateUser,
        SigninUser,
        SignOutUser,
        GoogleSignin
    }
    return (
        <AuthContext value={authData}>
            {
                children
            }
        </AuthContext>
    );
};

export default Authprovider;