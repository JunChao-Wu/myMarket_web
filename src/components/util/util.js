
/**
 * 精确查看数据的类型
 * @param {*} data 
 * @returns {String}
 */
export const _typeOf = function(data) {
  let reg = /^\[object (\w+)\]/;
  let value = reg.exec(Object.prototype.toString.call(data));
  return value[1];
}

/**
 * 查看对象是否拥有该属性(自身)
 * @param {Object} obj 
 * @param {String} key 
 * @returns {Boolean}
 */
export const hasOwnProp =  function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 克隆对象
 * @param {Object} oldObj 
 * @returns {Object}
 */
export const deepCloneObject =  function(oldObj) {
  const newObj = {};
  for(let key in oldObj) {
    let value = oldObj[key];
    if(_typeOf(value) == 'Object') {
      newObj[key] = deepCloneObject(value);
    }else {
      newObj[key] = value
    }
  }
  return newObj;
}

/**
 * 克隆对象数组
 * @param {Array} defaults 
 * @returns {Array}
 */
export const cloneData = function(defaults) {
  const options = [];
  defaults.forEach(obj => {
    options.push(deepCloneObject(obj));
  });
  return options;
}