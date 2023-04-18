const express = require("express");
const router = express.Router();

const { CreateBroadcastPost } = require("../controllers/broadcast");

router.route("/").post(CreateBroadcastPost);

module.exports = router;
