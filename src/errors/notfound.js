const BaseError=require('./BaseError');
const {StatusCodes}=require('http-status-codes');
class NotFound extends BaseError{
constructor(resourceName,resourceValue){
    super("Not Found",StatusCodes.NOT_FOUND,`the requested resource ${resourceName} with value ${resourceValue} is not found`,'not found');
  }
}

module.exports=NotFound;