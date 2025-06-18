import * as mod from './dist/release.js';

const run = async () => {
  const wasm = await mod;
  const { plus, minus, times, divide, average } = wasm;

  console.log("=== 高精度计算测试 ===\n");

  // 测试 plus 函数
  console.log("1. 测试 plus 函数:");
  const plusArr1 = [1.3, -5.09439403, 0.5, 0.03445342];
  const plusResult1 = plus(plusArr1, plusArr1.length);
  console.log(`plus([1.3, -5.09439403, 0.5, 0.03445342]) = ${plusResult1}`);
  console.log(`期望结果: -3.26034063`);
  console.log(`是否匹配: ${Math.abs(plusResult1 - (-3.26034063)) < 0.00000001 ? '✓' : '✗'}`);

  const plusArr2 = [0.2, 0.1];
  const plusResult2 = plus(plusArr2, plusArr2.length);
  console.log(`plus([0.2, 0.1]) = ${plusResult2}`);
  console.log(`期望结果: 0.3`);
  console.log(`是否匹配: ${Math.abs(plusResult2 - 0.3) < 0.00000001 ? '✓' : '✗'}\n`);

  // 测试 minus 函数
  console.log("2. 测试 minus 函数:");
  const minusArr1 = [10.5, 3.2, 1.1];
  const minusResult1 = minus(minusArr1, minusArr1.length);
  console.log(`minus([10.5, 3.2, 1.1]) = ${minusResult1}`);
  console.log(`期望结果: 6.2`);
  console.log(`是否匹配: ${Math.abs(minusResult1 - 6.2) < 0.00000001 ? '✓' : '✗'}`);

  const minusArr2 = [0.3, 0.1];
  const minusResult2 = minus(minusArr2, minusArr2.length);
  console.log(`minus([0.3, 0.1]) = ${minusResult2}`);
  console.log(`期望结果: 0.2`);
  console.log(`是否匹配: ${Math.abs(minusResult2 - 0.2) < 0.00000001 ? '✓' : '✗'}\n`);

  // 测试 times 函数
  console.log("3. 测试 times 函数:");
  const timesArr1 = [2.5, 3.2, 1.5];
  const timesResult1 = times(timesArr1, timesArr1.length);
  console.log(`times([2.5, 3.2, 1.5]) = ${timesResult1}`);
  console.log(`期望结果: 12.0`);
  console.log(`是否匹配: ${Math.abs(timesResult1 - 12.0) < 0.00000001 ? '✓' : '✗'}`);

  const timesArr2 = [0.2, 0.3];
  const timesResult2 = times(timesArr2, timesArr2.length);
  console.log(`times([0.2, 0.3]) = ${timesResult2}`);
  console.log(`期望结果: 0.06`);
  console.log(`是否匹配: ${Math.abs(timesResult2 - 0.06) < 0.00000001 ? '✓' : '✗'}\n`);

  // 测试 divide 函数
  console.log("4. 测试 divide 函数:");
  const divideArr1 = [12.0, 3.0, 2.0];
  const divideResult1 = divide(divideArr1, divideArr1.length);
  console.log(`divide([12.0, 3.0, 2.0]) = ${divideResult1}`);
  console.log(`期望结果: 2.0`);
  console.log(`是否匹配: ${Math.abs(divideResult1 - 2.0) < 0.00000001 ? '✓' : '✗'}`);

  const divideArr2 = [0.3, 0.1];
  const divideResult2 = divide(divideArr2, divideArr2.length);
  console.log(`divide([0.3, 0.1]) = ${divideResult2}`);
  console.log(`期望结果: 3.0`);
  console.log(`是否匹配: ${Math.abs(divideResult2 - 3.0) < 0.00000001 ? '✓' : '✗'}\n`);

  // 测试 average 函数
  console.log("5. 测试 average 函数:");
  const avgArr1 = [1.0, 2.0, 3.0, 4.0, 5.0];
  const avgResult1 = average(avgArr1, avgArr1.length);
  console.log(`average([1.0, 2.0, 3.0, 4.0, 5.0]) = ${avgResult1}`);
  console.log(`期望结果: 3.0`);
  console.log(`是否匹配: ${Math.abs(avgResult1 - 3.0) < 0.00000001 ? '✓' : '✗'}`);

  const avgArr2 = [0.1, 0.2, 0.3];
  const avgResult2 = average(avgArr2, avgArr2.length);
  console.log(`average([0.1, 0.2, 0.3]) = ${avgResult2}`);
  console.log(`期望结果: 0.2`);
  console.log(`是否匹配: ${Math.abs(avgResult2 - 0.2) < 0.00000001 ? '✓' : '✗'}\n`);

  // 对比 JavaScript 原生计算
  console.log("=== 与 JavaScript 原生计算对比 ===");
  console.log(`JavaScript: 0.2 + 0.1 = ${0.2 + 0.1}`);
  console.log(`我们的实现: plus([0.2, 0.1]) = ${plusResult2}`);
  console.log();
  console.log(`JavaScript: 0.3 - 0.1 = ${0.3 - 0.1}`);
  console.log(`我们的实现: minus([0.3, 0.1]) = ${minusResult2}`);
  console.log();
  console.log(`JavaScript: 0.2 * 0.3 = ${0.2 * 0.3}`);
  console.log(`我们的实现: times([0.2, 0.3]) = ${timesResult2}`);
  console.log();
  console.log(`JavaScript: 0.3 / 0.1 = ${0.3 / 0.1}`);
  console.log(`我们的实现: divide([0.3, 0.1]) = ${divideResult2}`);
};

run(); 