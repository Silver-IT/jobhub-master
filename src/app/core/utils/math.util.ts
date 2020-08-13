export function generateRandomNumbers(max: number, count: number, unique = true) {
  const maxCount = max;
  const data = new Array(maxCount);
  const nums = Array.from(Array(maxCount).keys()).map(v => v + 1);
  const ranNums = [];
  let i = maxCount - 1;
  let genCount = count;
  while (genCount--) {
    const j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
    i--;
  }
  return ranNums;
}
