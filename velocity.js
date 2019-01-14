import Compile from './src/compile';
import Helper from './src/helper';
import parse from './src/parse';

Compile.parse = parse;

function render(template, context, macros, config) {
  var asts = parse(template);
  var compile = new Compile(asts, config);
  return compile.render(context, macros);
};

export {parse, Compile, Helper, render};