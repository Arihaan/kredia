'use client';
 
import { useState } from 'react'

import TableComponent from '../components/TableComponent';


export default function Home() {
  return (
    <>
      <section className="bg-cover bg-center h-[10vh] font-sans mt-5">
        <div className="text-left ml-20 float-left inline-block">
          <h1 className="text-4xl font-bold text-gray-100 mb-8">Dashboard</h1>
        </div>
        <div className=" mt-2 float-right mr-40 inline-block">
        <a href="/KrediaPDF.pdf" className="bg-black py-3 px-5 rounded-md text-lg font-semibold hover:bg-blue-800">Generate AI Report</a>
        </div>
      </section>
      <section className="bg-cover bg-center font-sans ml-20 text-xl">
        Welcome back Myles, your current Credit Score is <strong>696</strong> with a Risk Score of <strong>95</strong>.
        <br/><br/>Your recent transactions:
        <div class="p-4">
    <div class="rounded-lg">
        <table>
            <thead>
                <tr>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">transactionUUID</th>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">merchant</th>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">category</th>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">amount</th>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">currency</th>
                    <th class="border-b-2 p-3 dark:border-dark-5 dark:text-white">time-stamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b p-3 bg-transparent">0bb9b837-d573-4ed3-b53e-1d803072ee0a</td>
                    <td class="border-b p-3 bg-transparent">Fact News</td>
                    <td class="border-b p-3 bg-transparent">Education</td>
                    <td class="border-b p-3 bg-transparent">-2734.02</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-09-03 14:21:32</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">f86ea302-414e-4901-910f-14b6ef6d9b3e</td>
                    <td class="border-b p-3 bg-transparent">Capital Two</td>
                    <td class="border-b p-3 bg-transparent">Bills & Utilities</td>
                    <td class="border-b p-3 bg-transparent">889.99</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-08-18 16:59:15</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">18e345ee-1853-46b8-aeaa-660070f67e44</td>
                    <td class="border-b p-3 bg-transparent">Fact News</td>
                    <td class="border-b p-3 bg-transparent">Education</td>
                    <td class="border-b p-3 bg-transparent">519.99</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-07-13 00:43:07</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">173a781a-2adf-4dfa-81c0-baa753fbefa1</td>
                    <td class="border-b p-3 bg-transparent">McFairbank</td>
                    <td class="border-b p-3 bg-transparent">Food & Dining</td>
                    <td class="border-b p-3 bg-transparent">319.99</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-08-14 05:30:48</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">6a28b59f-e731-4ccc-bd8d-4786ac16a9a9</td>
                    <td class="border-b p-3 bg-transparent">Car Stickers</td>
                    <td class="border-b p-3 bg-transparent">Auto & Transport</td>
                    <td class="border-b p-3 bg-transparent">189.99</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-07-05 23:11:55</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">dab44012-a059-4ead-9e1b-275be171913a</td>
                    <td class="border-b p-3 bg-transparent">CatShoes</td>
                    <td class="border-b p-3 bg-transparent">Personal Care</td>
                    <td class="border-b p-3 bg-transparent">2861.69</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-05-18 03:07:56</td>
                </tr>
                <tr>
                    <td class="border-b p-3 bg-transparent">a028ea07-1812-429b-a010-1556fddb1fca</td>
                    <td class="border-b p-3 bg-transparent">Fact News</td>
                    <td class="border-b p-3 bg-transparent">Education</td>
                    <td class="border-b p-3 bg-transparent">-929.99</td>
                    <td class="border-b p-3 bg-transparent">INR</td>
                    <td class="border-b p-3 bg-transparent">2023-07-30 05:14:14</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

      </section>

    
    <div>
        <TableComponent />
    </div>

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
