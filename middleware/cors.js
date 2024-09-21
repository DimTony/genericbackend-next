export const cors = (handler) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with specific origins for security
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return handler(req, res);
};
