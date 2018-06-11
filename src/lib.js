export function calc(steps) {
  const str = steps.join('');
  const split = str.split(/([+\-*\/])+/).map(x => {
    let val;
    try {
      val = parseFloat(x);
      if (isNaN(val)) {
        val = x;
      }
    } catch (e) {
      val = x;
    }
    return val;
  });
  return eval(split.join(''));
}
