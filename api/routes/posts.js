const express = require('express');
const router = express.Router();
const postsController = require("../controllers/posts");

router.get('/:id', postsController.show);
router.post('/', postsController.create);

module.exports = router;
