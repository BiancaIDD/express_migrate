import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`,
      });
    }

    //comparing passwords
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: 'Invalid Password',
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      'secret-key',
      {
        expiresIn: 86400,
      }
    );

    res.status(200).send({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      message: 'Login successful',
      accessToken: token,
    });
  } catch (err) {
    console.log(err);
  }
};
