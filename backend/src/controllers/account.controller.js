const AccountModel = require("../models/account.model");
const jwt = require("jsonwebtoken");

const { encryptPassword, matchPassword } = require("../lib/encrypt");
const today = new Date();

module.exports = {
  // @route     GET /api/accounts/admin/register
  // @desc      Create a new account
  // @access    Private - Only for admins
  register: async (req, res) => {
    var { fullname, email, password, role } = req.body;
    var userData = {
      fullname,
      email,
      password,
      created: today,
      role,
    };

    const findAccount = await AccountModel.findOne({ email });

    if (!findAccount) {
      const hash = await encryptPassword(password);
      userData.password = hash;
      const createUser = await AccountModel.create(userData);
      if (createUser) {
        res.json({
          error: false,
          message: "Usuario registrado correctamente.",
        });
      } else {
        res.json({
          error: true,
          message: "Hubo un problema al registrar el usuario.",
        });
      }
    } else {
      res.json({ error: true, message: "El usuario ya existe." });
    }
  },
  // @route     POST /api/accounts/admin/login
  // @desc      Login to enter to dashboard
  // @access    Private - Only for admins
  login: async (req, res) => {
    const { email, password } = req.body;

    const userFound = await AccountModel.findOne({ email }); // Verify if user exist in db

    if (userFound) {
      const match = await matchPassword(password, userFound.password); //Verify password
      if (match) {
        var payload = {
          fullname: userFound.fullname,
          email: userFound.email,
          role: userFound.role,
        };

        // Set JWT
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: "3h" },
          (error, token) => {
            if (error) res.json({ error });
            res.header("Authorization", token).send(token);
          }
        );
        
      } else { // If password is not the correct, send match error
        res.json({
          error: true,
          type_error: "UNAUTHORIZED",
          message: "Email y/o contraseña incorrectos.",
        });
      }
    } else { // If user does'nt exit, send UNAUTHORIZED error
      res.json({ 
        error: true, 
        type_error: "UNAUTHORIZED",
        message: "No exite el usuario." 
      });
    }
  },
  // To test checkToken middleware
  profile: (req, res) => {
    res.send("This is the profile page");
  },
};
