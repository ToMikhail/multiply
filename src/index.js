module.exports = function multiply(first, second) {
   let res =BigInt(first) * BigInt(second);
  return BigInt(res).toString();
}
