import Velocity from "velocity-template";

var tpl = document.getElementById("tpl").innerHTML;
var asts = Velocity.parse(tpl);
var data = {
  items: ["a", "b", "c", "d"]
};
var html = (new Velocity.Compile(asts)).render(data);
document.getElementById("container").innerHTML = html;