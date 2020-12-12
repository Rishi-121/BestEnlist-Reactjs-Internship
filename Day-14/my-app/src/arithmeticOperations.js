/* jshint ignore:start */

function add(x, y) {
  return Number(x) + Number(y);
}

function sub(x, y) {
  return Number(x) - Number(y);
}

function div(x, y) {
  return (Number(x) / Number(y)).toFixed(2);
}

function mul(x, y) {
  return Number(x) * Number(y);
}

export { add, sub, div, mul };
