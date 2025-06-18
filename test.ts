import { plus } from './assembly/index';

// 测试用例
console.log("测试高精度加法:");

// 测试用例1: plus(1.3, -5.09439403, 0.5, 0.03445342) 应该返回 -3.26034063
const result1 = plus(1.3, -5.09439403, 0.5, 0.03445342);
console.log(`plus(1.3, -5.09439403, 0.5, 0.03445342) = ${result1}`);
console.log(`期望结果: -3.26034063`);
console.log(`是否匹配: ${Math.abs(result1 - (-3.26034063)) < 0.00000001 ? '✓' : '✗'}`);

console.log();

// 测试用例2: plus(0.2, 0.1，0.564, 2034342343.53) 应该返回 2034342343.530564
const result2 = plus(0.2, 0.1, 0.564, 2034342343.53);
console.log(`plus(0.2, 0.1, 0.564, 2034342343.53) = ${result2}`);
console.log(`期望结果: 2034342343.530564`);
console.log(`是否匹配: ${Math.abs(result2 - 2034342343.530564) < 0.00000001 ? '✓' : '✗'}`);

console.log();

// 测试用例3: plus(0.2, 0.1) 应该返回 0.3
const result3 = plus(0.2, 0.1);
console.log(`plus(0.2, 0.1) = ${result3}`);
console.log(`期望结果: 0.3`);
console.log(`是否匹配: ${Math.abs(result3 - 0.3) < 0.00000001 ? '✓' : '✗'}`);

console.log();

// 额外测试用例
console.log("额外测试用例:");

// 测试JavaScript原生浮点数精度问题
const jsResult = 0.2 + 0.1;
console.log(`JavaScript原生: 0.2 + 0.1 = ${jsResult}`);
console.log(`我们的实现: plus(0.2, 0.1) = ${result3}`);

console.log();

// 测试更多数字
const result4 = plus(0.1, 0.2, 0.3, 0.4, 0.5);
console.log(`plus(0.1, 0.2, 0.3, 0.4, 0.5) = ${result4}`);
console.log(`期望结果: 1.5`);
console.log(`是否匹配: ${Math.abs(result4 - 1.5) < 0.00000001 ? '✓' : '✗'}`);

console.log();

// 测试负数
const result5 = plus(-1.5, 2.3, -0.8);
console.log(`plus(-1.5, 2.3, -0.8) = ${result5}`);
console.log(`期望结果: 0.0`);
console.log(`是否匹配: ${Math.abs(result5 - 0.0) < 0.00000001 ? '✓' : '✗'}`);
