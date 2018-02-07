var express = require('express');
var lib = require('simulation_e')
var router = express.Router();


var authentication = function(req,res,next){
    if(req.query.token === 'Admin'){
    next();
    }else{
      res.status(401).send({error : 'Token not valid'});
    }
  };

router.post('/ecommerce',authentication,function(req,res,next){
    if(isNaN(req.query.product)){
    res.status(200).json(lib.insertProduct(req.query.token,req.query.product));
    }else{
      res.status(400).json();
  }

});


router.delete('/ecommerce',authentication,function(req,res,next){
  if(!isNaN(req.query.id) && req.query.id <= lib.allProducts().length){
    res.status(200).json(lib.deleteProduct(req.query.token, req.query.id));
  }
    res.status(400).json();
});


router.put('/ecommerce',authentication,function(req,res,next){
  if(!isNaN(req.query.id) && isNaN(req.query.newProduct) && !isNaN(req.query.quantity)){
    res.status(200).json(lib.modifyProduct(req.query.token,req.query.id,req.query.newProduct,req.query.quantity));
    }
    res.status(400).json();

});


router.get('/ecommerce',function(req,res,next){
    if(req.query.token != 'Admin') {
      next();
    }
    else{
      res.status(401).send({error : 'Token not valid'});
    }

},
function(req,res,next){
  if (isNaN(req.query.token) && !isNaN(req.query.id)){
        res.status(200).json(lib.buyProduct(req.query.token,req.query.id));
  }
  res.status(400).json();
});




module.exports = router;
