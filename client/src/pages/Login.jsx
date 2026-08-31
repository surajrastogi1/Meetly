import { SignIn, SignUp } from '@clerk/react';
import { useUser } from '@clerk/react-router';
import React from 'react'
import { Navigate } from 'react-router-dom';

const Login = ({mode="login"}) => {

    const isRegister = mode === 'register';
    const {isLoaded, isSignedIn} = useUser();
    
    if(isLoaded && isSignedIn){
        <Navigate path="/dashboard" replace/>
    }

  return (
    <div className="min-h-screen w-full bg-[url('/login_bg.png')] text-slate-800 p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans">
        {isRegister ? (
            <SignUp routing='path' path='/register' signInUrl='/login' fallbackRedirectUrl='/dashboard' />
        ) : (
            <SignIn routing='path' path='/login' signUpUrl='/register' fallbackRedirectUrl='/dashboard'/>
        )}
    </div>
  )
}

export default Login