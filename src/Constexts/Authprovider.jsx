import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const Authprovider = ({ children }) => {
    const [user, setUser] = useState({});
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


    // Objerber setup 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoding(false);
            console.log('user in ths auth state change',user)
            console.log(currentUser)

            // apadoto delam _____ ____ ____------____------___----|
            axios.get("http://localhost:3000",{
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
        SignOutUser
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