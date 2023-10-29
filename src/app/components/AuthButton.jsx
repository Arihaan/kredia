'use  client';

import React, { useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';


const AuthButton = () => {
    const { user, isLoading } = useUser();

    return (
    <div>
      {!isLoading && !user && (
        <a href="/api/auth/login" className="bg-[#00A6E2] py-3 px-5 rounded-md text-lg font-semibold hover:bg-blue-800"> 
          Join Now
        </a>
    )}
    {user && (
      <a href="/dashboard" className="bg-[#00A6E2] py-3 px-5 rounded-md text-lg font-semibold hover:bg-blue-800"> 
      Access My Dashboard
      </a>
  )}
  </div>
    )}
  export default AuthButton;
  

