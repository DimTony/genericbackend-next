export const errorHandler = (handler) => async (req, res) => {
  try {
    return await handler(req, res);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
