const router = require("express").Router();
const userController = require("../../controllers/userController");
const auth = require("../../client/middleware/auth");
const { User } = require("../../models");
// const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Matches with "/api/user"
router.route("/user")
  .get(userController.findAll)
  // .post(userController.create)
  .post(userController.create, async (req, res) => {
    try {
      let { email, password, confirmPassword } = req.body;

      if (!email || !password || !confirmPassword)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." });
      if (password !== confirmedPassword)
        return res.status(400)
          .json({ msg: "Your passwords need to match for verification." });
      const existingUser = User.findOne({ email: email })
      if (existingUser)
        return res.status(400)
          .json({ msg: "An account with this email already exists." })
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const newUser = new User({
        email,
        password: passwordHash,

      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been filled out." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." })
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
    res.json({
      token,
      user: {
        id: user_id,
        email: user.email,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

// Matches with "/api/user/:id"
router.route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/user/trips")
  .get(userController.findAll)
  .post(userController.create)

router.route("/user/trips/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


router.route("/user/maintain")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/maintain/:id"
router.route("/user/maintain/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;