import Helper from '../helper';
import blocks from './blocks';
import literal from './literal';
import references from './references';
import set from './set';
import expression from './expression';
import compile from './compile';

function Velocity(asts, config) {
  this.asts = asts;
  this.config = Object.assign(
    {
      // 自动输出为经过html encode输出
      escape: true,
      // 不需要转义的白名单
      unescape: {},
      valueMapper(value) {
        return value;
      },
    },
    config
  );
  this._state = { stop: false, break: false };
  this.init();
}

Velocity.Helper = Helper;
Velocity.prototype = {
  constructor: Velocity
};

blocks(Velocity);
literal(Velocity);
references(Velocity);
set(Velocity);
expression(Velocity);
compile(Velocity);

export default Velocity;
