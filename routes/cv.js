var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var cv = require('../models/cv.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  cv.find(function (err, cvs) {
    if (err) return next(err);
    res.json(cvs);
  });
});

router.post('/', function(req, res, next) {
  cv.create(req.body, function (err, cv) {
    if (err) return next(err);
    res.json(cv);
  });
});

/* GET /cvs/id */
router.get('/:id', function(req, res, next) {
  cv.findById(req.params.id, function (err, cv) {
    if (err) return next(err);
    res.json(cv);
  });
});
module.exports = router;