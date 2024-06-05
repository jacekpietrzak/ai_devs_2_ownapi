const { Router } = require("express");
const router = Router();

const answerRoute = require("./answerRoute");

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to the API",
  });
});

router.use("/answer", answerRoute);

module.exports = router;
