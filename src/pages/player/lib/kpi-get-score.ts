export type KpiGetScoreParams = {
  min: number;
  max: number;
  target: number;
  fact: number;
}

type KpiGetScore = (params: KpiGetScoreParams) => number;

export const kpiGetScore: KpiGetScore = ({ min, max, target, fact }) => {
  if (min >= max) throw new Error('min >= max');
  if (target < min) throw new Error('target < min');
  if (target > max) throw new Error('target > max');

  console.log('@@ kpiGetScore', { min, max, target, fact });

  if (fact <= min) {
    return 0;
  } else if (fact > min && fact <= target) {
    return (fact - min) / ((target - min) / 100);
  } else if (fact > target && fact <= max) {
    return 100 + (fact - target) * ((150 - 100) / (max - target));
  } else if (fact == target || (target == max && fact > max)) {
    return 100;
  } else if (fact >= max) {
    return 150;
  }

  return 0;
};