// The entry file of your WebAssembly module.

export function plus(...a: i64[]): i64 {
    let result: i64 = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result;
}
