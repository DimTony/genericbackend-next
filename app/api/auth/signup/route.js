import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  await dbConnect();

  const { username, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return new Response(
    JSON.stringify({ message: "User created successfully!" }),
    {
      status: 201,
    }
  );
}
