var express = require('express');
var router = express.Router();
var Country = require('../models/entriesSchema');


router.get('/read',(req,res,next) => {
  entries.find({},(err,entry)=> {
      if(err)
          res.status(500).json({errmsg : err});
      res.status(200).json({msg:entry});
  });
});


module.exports = router;