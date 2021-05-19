const Character = require("../models/character");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
    res.json(await Character.find({}))
});

//create route
router.post("/", async (req, res) => {
  res.json(await Character.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Character.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Character.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;