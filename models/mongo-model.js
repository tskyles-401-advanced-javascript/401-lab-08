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
    else this.schema.find();
  }
  /**
 *
 *
 * @param {*} record
 * @memberof Model
 */
  create(record){
    if(typeof record === 'object'){
      let newObject = new this.schema(record);
      return newObject.save();
    }
    else {
      return Error('something went wrong.. Could not save to db..');}
  }
  
  /**
 *
 *
 * @param {*} _id
 * @param {*} record
 * @memberof Model
 */
  update(_id, record){
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