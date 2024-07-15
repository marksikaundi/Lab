'use client'

import React, { useEffect } from 'react';
import { SignIn, SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { useState } from 'react';
import Image from 'next/image';





const Ladderboard = () => {
  const { isSignedIn, user } = useUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);
  

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Leaderboard</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-950 text-white h-16">
              <th className="w-1/6 py-3 px-4 uppercase font-bold text-sm">Rank</th>
              <th className="w-1/3 py-3 px-4 uppercase font-bold text-sm pr-8">Name</th>
              <th className="w-1/6 py-3 px-4 uppercase font-bold text-sm">Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.name} className={`transition-colors duration-300 hover:bg-gray-300`}>
                <td className="py-3 px-4 text-center"><span className='p-2 px-3 rounded-full bg-orange-600'>{index + 1}</span></td>
                <td className="py-3 px-4 md:pl-28 flex items-center">
                  {/* <Image
                    className="w-8 h-8 rounded-full mr-3 hidden md:block"
                    src={'/reactjs.png'}
                    alt={user.name}
                    width={32}
                    height={32}
                  /> */}
                  <UserButton className="w-8 h-8 rounded-full mr-3 hidden md:block" />
                  <span className="text-gray-800">{user.name}</span>
                </td>
                <td className="py-3 px-4 text-center">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ladderboard;
