import User from "../models/User.js"

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      "message": "User Created",
      "id": user.id
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      "message": "error creating user"
    })
  }
}

