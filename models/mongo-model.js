'use strict';

/**
 *
 *
 * @class Model
 */
class Model {
  constructor(schema){
    this.schema = schema;
  }

  /**
  *
  *
  * @param {*} _id
  * @memberof Model
  */
  get(_id){
    if(_id){
      return this.schema.findOne( {_id} );
    }
    else return this.schema.find({});
  }
  /**
 *
 *
 * @param {*} record
 * @memberof Model
 */
  post(record){
    let newObject = new this.schema(record);
    return newObject.save();
  

  }
  
  /**
 *
 *
 * @param {*} _id
 * @param {*} record
 * @memberof Model
 */
  put(_id, record){
    if(_id && record){
      return this.schema.findByIdAndUpdate(_id, record, {new: true});
    }
    else {
      return undefined;
    }
  }
  /**
 *
 *
 * @param {*} _id
 * @memberof Model
 */
  delete(_id){
    if(_id){
      return this.schema.findByIdAndDelete(_id);
    }
    else {
      return 'could not find record...';
    }
  }
}

/** 
 * @module Model
*/
module.exports = Model;