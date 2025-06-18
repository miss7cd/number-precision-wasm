// 测试AssemblyScript编译后的模块
import * as mod from './dist/release.js';

const run = async () => {
  const wasm = await mod;
  const plus = wasm.plus;

  console.log("测试高精度加法:");

  // 测试变长参数方式
  console.log("=== 变长参数方式测试 ===");
  const result1 = plus(1.3, -5.09439403, 0.5, 0.03445342);
  console.log(`plus(1.3, -5.09439403, 0.5, 0.03445342) = ${result1}`);
  console.log(`期望结果: -3.26034063`);
  console.log(`是否匹配: ${Math.abs(result1 - (-3.26034063)) < 0.00000001 ? '✓' : '✗'}`);
  console.log();

  const result2 = plus(0.2, 0.1);
  console.log(`plus(0.2, 0.1) = ${result2}`);
  console.log(`期望结果: 0.3`);
  console.log(`是否匹配: ${Math.abs(result2 - 0.3) < 0.00000001 ? '✓' : '✗'}`);
  console.log();

  // 测试数组方式
  console.log("=== 数组方式测试 ===");
  const arr1 = [1.3, -5.09439403, 0.5, 0.03445342];
  const result3 = plus(arr1, arr1.length);
  console.log(`plus([1.3, -5.09439403, 0.5, 0.03445342]) = ${result3}`);
  console.log(`期望结果: -3.26034063`);
  console.log(`是否匹配: ${Math.abs(result3 - (-3.26034063)) < 0.00000001 ? '✓' : '✗'}`);
  console.log();

  const arr2 = [0.2, 0.1, 0.564, 2034342343.53];
  const result4 = plus(arr2, arr2.length);
  console.log(`plus([0.2, 0.1, 0.564, 2034342343.53]) = ${result4}`);
  console.log(`期望结果: 2034342343.530564`);
  console.log(`是否匹配: ${Math.abs(result4 - 2034342343.530564) < 0.00000001 ? '✓' : '✗'}`);
  console.log();

  // 额外测试用例
  console.log("=== 额外测试用例 ===");
  const jsResult = 0.2 + 0.1;
  console.log(`JavaScript原生: 0.2 + 0.1 = ${jsResult}`);
  console.log(`我们的实现: plus(0.2, 0.1) = ${result2}`);
  console.log();

  const result5 = plus(0.1, 0.2, 0.3, 0.4, 0.5);
  console.log(`plus(0.1, 0.2, 0.3, 0.4, 0.5) = ${result5}`);
  console.log(`期望结果: 1.5`);
  console.log(`是否匹配: ${Math.abs(result5 - 1.5) < 0.00000001 ? '✓' : '✗'}`);
  console.log();

  const result6 = plus(-1.5, 2.3, -0.8);
  console.log(`plus(-1.5, 2.3, -0.8) = ${result6}`);
  console.log(`期望结果: 0.0`);
  console.log(`是否匹配: ${Math.abs(result6 - 0.0) < 0.00000001 ? '✓' : '✗'}`);
};

run(); 