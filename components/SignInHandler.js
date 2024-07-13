'use client';
import { useUser } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';

const SignInHandler = () => {
  const { user } = useUser();
  const isUserStoredRef = useRef(false);

  useEffect(() => {
    if (user && !isUserStoredRef.current) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          name: user.fullName,
          score: 0,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          isUserStoredRef.current = true;
        }
      });
    }
  }, []);

  return (
    <>
    {user && !isUserStoredRef.current ? [] : (
      <div className="fixed bottom-0 right-0 bg-red-500 text-white p-4">
        Storing user data...
        </div>
        ) }
    </>
  )
};

export default SignInHandler;