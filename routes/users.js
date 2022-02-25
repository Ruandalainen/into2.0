const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu!");
});

router.use(function (request,response,next) {
  console.log("Olen valivehke 1!");
  next();
});

router.get('/toka', function(request, response)
{
  response.send("olempa toka hyvinkin");
  console.log("tokapa tietenkin");

}
);

router.use(function (request,response,next) {
  console.log("Olen valivehke 2!");
  next();
});

router.get('/kolmas/:nimi', function(request, response)
{
  response.send("olempa vaan "+request.params.nimi);
  console.log(request.params.nimi);
}
);

router.use(function (request,response,next) {
  console.log("Olen valivehke 3!");
  next();
});

router.get('/neljas/:enimi/:snimi', function(request, response){
    response.send("olempa vaan "+ request.params.enimi +" "+request.params.snimi);
    //console.log(request.params.enimi, request.params.snimi);
  }
);
router.post('/',function(request, response)
{
  response.send(request.body);
});
module.exports = router;
