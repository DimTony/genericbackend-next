import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { authenticateUser } from "@/middleware/auth";

export const GET = authenticateUser(async (req, res) => {
  await dbConnect();

  const users = await User.find();

  return new Response(JSON.stringify(users), { status: 200 });
});
