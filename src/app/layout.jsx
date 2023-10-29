"use client";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Inter } from 'next/font/google'
import './globals.css'
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <div className="min-h-screen text-white bg-gradient-to-r from-indigo-500 to-cyan-500">
            <>
              <Navbar/>
            </>
            
              {children}
          </div>
        </body>
      </UserProvider>
    </html>
  )
}





