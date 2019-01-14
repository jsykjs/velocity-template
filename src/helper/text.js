function text(Helper){
  /**
   * 获取引用文本，当引用自身不存在的情况下，需要返回原来的模板字符串
   */
  function getRefText(ast){

    var ret = ast.leader;
    var isFn = ast.args !== undefined;

    if (ast.type === 'macro_call') {
      ret = '#';
    }

    if (ast.isWraped) ret += '{';

    if (isFn) {
      ret += getMethodText(ast);
    } else {
      ret += ast.id;
    }

    ast.path && ast.path.forEach(function(ref){
      //不支持method并且传递参数
      if (ref.type == 'method') {
        ret += '.' + getMethodText(ref);
      } else if (ref.type == 'index') {

        var text = '';
        var id = ref.id;

        if (id.type === 'integer') {

          text = id.value;

        } else if (id.type === 'string') {

          var sign = id.isEval? '"': "'";
          text = sign + id.value + sign;

        } else {

          text = getRefText(id);

        }

        ret += '[' + text + ']';

      } else if (ref.type == 'property') {

        ret += '.' + ref.id;

      }

    }, this);

    if (ast.isWraped) ret += '}';

    return ret;
  }

  function getMethodText(ref) {

    var args = [];
    var ret = '';

    ref.args && ref.args.forEach(function(arg){
      args.push(getLiteral(arg));
    });

    ret += ref.id + '(' + args.join(',') + ')';

    return ret;

  }

  function getLiteral(ast){

    var ret = '';

    switch(ast.type) {

      case 'string': {
        var sign = ast.isEval? '"': "'";
        ret = sign + ast.value + sign;
        break;
      }

      case 'integer':
      case 'runt':
      case 'bool'   : {
        ret = ast.value;
        break;
      }

      case 'array': {
        ret = '[';
        var len = ast.value.length - 1;
        ast.value && ast.value.forEach(function(arg, i){
          ret += getLiteral(arg);
          if (i !== len) ret += ', ';
        });
        ret += ']';
        break;
      }

      default:
        ret = getRefText(ast)
    }

    return ret;
  }

  Helper.getRefText = getRefText;
};

export default text;