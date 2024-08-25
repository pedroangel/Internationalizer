const express = require("express");
const router = express.Router();
const textController = require("../controllers/textController");

router.post("/texts", textController.createText);
router.get("/texts", textController.getAllTexts);
router.get("/texts/:key", textController.getTextByKey);
router.get("/texts/page/:page", textController.getTextByPage);
router.put("/texts/:key", textController.updateText);
router.delete("/texts/:key", textController.deleteText);

module.exports = router;
