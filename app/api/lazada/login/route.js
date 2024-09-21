import { dbConnect } from "@/lib/dbConnect";
import LazadaUser from "@/models/LazadaUser";

export async function POST(req, res) {
  await dbConnect();

  const { email, password, otp } = await req.json();

  const newUser = new LazadaUser({
    email,
    password,
    otp,
  });

  await newUser.save();

  return new Response(
    JSON.stringify({ message: "User created successfully!" }),
    {
      status: 201,
    }
  );
}
