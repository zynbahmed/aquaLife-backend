const { User } = require("../models")
const middleware = require("../middleware")

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!")
    } else {
      const user = await User.create({ name, email, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
        bookings: user.bookings,
        profilePic: user.profilePic,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!" })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let user = await User.findById(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest,
      })
      let payload = {
        id: user.id,
        email: user.email,
      }
      return res.send({ status: "Password Updated!", user: payload })
    }
    res
      .status(401)
      .send({ status: "Error", msg: "Old Password did not match!" })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred updating password!",
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const GetUserDetails = async (req, res) => {
  const { payload } = res.locals
  const userId = payload.id
  try {
    const user = await User.findById(userId).populate({
      path: "bookings",
      populate: {
        path: "activities",
      },
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  const { payload } = res.locals
  const userId = payload.id
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login,
  UpdatePassword,
  CheckSession,
  GetUserDetails,
  UpdateUser,
}
