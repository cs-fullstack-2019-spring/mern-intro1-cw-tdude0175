var express = require('express');
var router = express.Router();
var TroubleTicketCollection = require("../models/TroubleTicketSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/tickets/:person/:problem/:date",(req,res)=>
{
  TroubleTicketCollection.create(
      {
        person: req.params.person,
        problem: req.params.problem,
        date: req.params.date
      },(errors)=>
      {
        if(errors)res.send(errors);
        else res.send("report made")
      })
});

router.get("/getReports",(req,res)=>
{
  TroubleTicketCollection.find((errors,results)=>
  {
    if(errors) res.send(errors);
    else res.send(results);
  });
});

module.exports = router;
