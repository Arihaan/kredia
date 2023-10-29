'use client';
 
import { useState } from 'react'

import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <>
      <section className="bg-cover bg-center h-[70vh] mt-36 font-sans flex">
        <div className="container ml-16">
          <h1 className="text-7xl font-bold text-gray-100 mb-8">Improve Credit Score <br/> with AI Insights</h1>
          <p className="text-5xl text-gray-300 mb-20 italic">introducing Κρεδία.</p>
          <AuthButton/>
        </div>
        <div className="mr-36">
            <img src="speedometer.png" alt="Side Image" className="w-[50vw]"/>
        </div>
      </section>
      
        
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">How It Works</h2>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Upload Transactions</h4>
                    <p className="text-gray-400">The user's bank transactions are securely stored in the system.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Quick Analysis</h4>
                    <p className="text-gray-400">Allow the data to be parsed by an AI Model, i.e. GPT-3.5 API.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Receive Report</h4>
                    <p className="text-gray-400">The AI Model will generate a report on how the user can increase their credit score.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<footer className="custom-header text-gray-400 py-8">
    <div className="container mx-auto text-center">
        <div className="mb-4">
            <a href="#"><img src="logo.png" alt="Kinetis Logo" className="w-10"/></a>
        </div>
        <nav className="mb-8">
            <a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 ml-4">Terms of Use</a>
        </nav>
        <p className="text-gray-300">&copy; 2023 Kredia. All rights reserved.</p>
    </div>
</footer>
    </>
  );
}
