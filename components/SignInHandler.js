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

  return
};

export default SignInHandler;
