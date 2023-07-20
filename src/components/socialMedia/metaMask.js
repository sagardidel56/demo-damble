// import React, { useEffect, useState } from 'react';
// // import Web3 from 'web3';
// export function MetaMasks({ children }) {
//   const [web3, setWeb3] = useState(null);
//   const [account, setAccount] = useState('');
//   const [values, setvalues] = useState(false)

//   // useEffect(() => {
//   //   const loadWeb3 = async () => {
//   //     if (window.ethereum) {
//   //       try {
//   //         // Request access to MetaMask
//   //         await window.ethereum.request({ method: 'eth_requestAccounts' });
//   //         const web3Instance = new Web3(window.ethereum);
//   //         console.log('web3Instanceweb3Instance',web3Instance)
//   //         setWeb3(web3Instance);
//   //       } catch (error) {
//   //         console.error('Error connecting to MetaMask:', error);
//   //       }
//   //     } else {
//   //       console.error('MetaMask not found');
//   //     }
//   //   };

//   //   loadWeb3();
//   // }, [values]);

//   // useEffect(() => {
//   //   const loadAccount = async () => {
//   //     if (web3) {
//   //       const accounts = await web3.eth.getAccounts();
//   //       console.log('accountsaccounts',accounts)
//   //       setAccount(accounts[0] || '');
//   //     }
//   //   };

//   //   loadAccount();
//   // }, [values]);
//   console.log('valuessss', values)
//   return <div>{<button type="button" style={{ background: 'transparent', border: 'none' }} onClick={() => setvalues(prev => !prev)}>{children}</button>}</div>

// };

