import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

export default function () {

  const {userName} = useContext(LoginContext)
  return (
    <div className = "max-height">
        <h2 className = "text-center black mt-5">Welcome Back, {userName} </h2>
    </div>
  )
}
