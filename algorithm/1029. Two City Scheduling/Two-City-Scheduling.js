/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let sumOfA = 0;
  const diff = costs
    .map((cost) => {
      sumOfA += cost[0];
      return cost[1] - cost[0];
    })
    .sort((l, r) => l - r)
    .slice(0, costs.length / 2);

  return diff.reduce((pre, cur) => pre + cur, sumOfA);
};
