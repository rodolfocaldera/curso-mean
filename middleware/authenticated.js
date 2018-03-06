'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = "clae_secreta_curso";

exports.ensureAuth = function(req,res,next){
  if(!req.headers.authorization){
    return res.status(403).send({message: "La petición no tiene la cabecera de autenticacion"});
  }

  var token = req.headers.authorization.replace(/['"]+/g,'');
  try{
    var payload = jwt.decode(token,secret);

    if(payload.exp <= moment().unix()){
      return res.status(401).send({message: "El Token ha expirado"});
    }
  }catch(ex){
    //console.log(ex);
    return res.status(403).send({message: "Token no válido"});
  }
  req.user = payload;
  next();
}
