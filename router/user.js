const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },

      if(exUser) {
        return res.status(403).send("The email address is already used");
      },
    });
  } catch (error) {
    next(error);
  }
});
