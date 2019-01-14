velocity-template engine.
==========================

velocity-template is the javascript implementation of the velocity template engine, it can run on browser and node side.

### Features

- Support both brwoser and node side.
- Parsing and rendering separation.
- Support for almost all syntax of the java velocity implementation.
- [Vim Syntax](https://github.com/shepherdwind/vim-velocity) for vim.

### Install

npm install velocity-template --save-dev

### Get Started

#### Direct script tag include(it provides the Velocity as a global variable.)

<script src="{publicpath}/velocity.min.js"></script>

#### or:

#### Via npm

import Velocity from "velocity-template"

### Usage

  ```
  var tpl = `
    #foreach($item in $items)
        <li>$item</li>
    #end
  `
  var asts = Velocity.parse(tpl);
  var data = {
    items: ["a", "b", "c", "d"]
  };
  var html = (new Velocity.Compile(asts)).render(data);
  ```

#### API

#### render

Velocity.render(vm, context, macros);

- vm {string} velocity string input
- context {object} render context, data or function for vm
- macros {object} such as `#include('path/xxx')` , you can define you `inlcude` macro function

#### parse and Complile

`parse` method can parse vm, and return ast tree of velocity.

`Compile` will render asts to result string.

#### parse

Velocity.parse(vm)

- vm {string} string of velocity
- blocks {object} self define blocks, such as `#cms(1) hello #end`, you can set `{cms: true}`
- ignorespace {boolean} if set true, then ignore the newline trim

#### Compile

new Compile(asts[, config])

- asts {array} array of vm asts tree
- config {object} you can define some option for Compile

```
var Compile = Velocity.Compile;
var asts = Velocity.parse('string of velocity');
(new Compile(asts)).render(context, macros);
```


### Syntax

Syntax you can find from [velocity user guide](http://velocity.apache.org/engine/devel/user-guide.html)。

### License 

[LICENSE MIT](LICENSE-MIT)
