const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res, next) => {
  res.json({
    posts: {
      title: "my first post",
      description: "route you shouldnt be viewing"
    }
  });
});

module.exports = router;
