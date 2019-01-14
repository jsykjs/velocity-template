var utils = {
  isObject: function(val){
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  }
}

export default utils;