export function add(a: i32, b: i32): i32 {
    return a + b as i32;
}

// plus(1.3, -5.0943940) 
// plus(0.2, 0.1)
export function plus(arr: f64[], len: i32): f64 {
    if (len <= 0) return 0.0;
    if (len === 1) return arr[0];

    // 1. 计算所有参数的小数位数，取最大位数
    let maxDecimal = 0;
    for (let i = 0; i < len; i++) {
        let d = decimalLength(arr[i]);
        if (d > maxDecimal) maxDecimal = d;
    }
    let base = pow10(maxDecimal);

    // 2. 全部转为整数后相加
    let sum: f64 = 0.0;
    for (let i = 0; i < len; i++) {
        sum += Math.round(arr[i] * base);
    }
    // 3. 再除以 10 的最大位数次方
    return sum / base;
}

export function minus(arr: f64[], len: i32): f64 {
    if (len <= 0) return 0.0;
    if (len === 1) return -arr[0];

    // 1. 计算所有参数的小数位数，取最大位数
    let maxDecimal = 0;
    for (let i = 0; i < len; i++) {
        let d = decimalLength(arr[i]);
        if (d > maxDecimal) maxDecimal = d;
    }
    let base = pow10(maxDecimal);

    // 2. 第一个数减去后面的所有数
    let result = Math.round(arr[0] * base);
    for (let i = 1; i < len; i++) {
        result -= Math.round(arr[i] * base);
    }
    // 3. 再除以 10 的最大位数次方
    return result / base;
}

export function times(arr: f64[], len: i32): f64 {
    if (len <= 0) return 0.0;
    if (len === 1) return arr[0];

    // 1. 计算所有参数的小数位数总和
    let totalDecimal = 0;
    for (let i = 0; i < len; i++) {
        totalDecimal += decimalLength(arr[i]);
    }
    let base = pow10(totalDecimal);

    // 2. 全部转为整数后相乘
    let result = Math.round(arr[0] * pow10(decimalLength(arr[0])));
    for (let i = 1; i < len; i++) {
        result *= Math.round(arr[i] * pow10(decimalLength(arr[i])));
    }
    // 3. 再除以 10 的总位数次方
    return result / base;
}

export function divide(arr: f64[], len: i32): f64 {
    if (len <= 0) return 0.0;
    if (len === 1) return arr[0];

    // 1. 计算所有参数的小数位数
    let maxDecimal = 0;
    for (let i = 0; i < len; i++) {
        let d = decimalLength(arr[i]);
        if (d > maxDecimal) maxDecimal = d;
    }
    let base = pow10(maxDecimal);

    // 2. 第一个数除以后面的所有数
    let result = Math.round(arr[0] * base);
    for (let i = 1; i < len; i++) {
        let divisor = Math.round(arr[i] * base);
        if (divisor === 0) return 0.0; // 除零保护
        result = Math.round(result / divisor * base);
    }
    // 3. 再除以 10 的最大位数次方
    return result / base;
}

export function average(arr: f64[], len: i32): f64 {
    if (len <= 0) return 0.0;
    if (len === 1) return arr[0];

    // 先求和，再除以个数
    let sum = plus(arr, len);
    return sum / (len as f64);
}

// 计算一个数的小数位数（不使用字符串）
function decimalLength(num: f64): i32 {
    let e = 1;
    let count = 0;
    while (Math.round(num * e) / e !== num && count < 18) {
        e *= 10;
        count++;
    }
    return count;
}

// 计算10的n次方
function pow10(n: i32): f64 {
    let res: f64 = 1.0;
    for (let i = 0; i < n; i++) {
        res *= 10.0;
    }
    return res;
}