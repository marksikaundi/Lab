import { getAuth } from '@clerk/nextjs/server';
import dbConnect from '../../../lib/dbConnect';
import User from '../../models/userModel';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  await dbConnect();

  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ success: false, error: 'User ID not found' }, { status: 401 });
  }

  try {
    let user = await User.findOne({ clerkId: userId });
    if (!user) {
      const data = await req.json();
      user = await User.create({ clerkId: userId, ...data });
      console.log('User created:', user);
    } else {
      console.log('User already exists:', user);
    }
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await dbConnect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error fetching challenges", error }), { status: 500 });
  }
};
