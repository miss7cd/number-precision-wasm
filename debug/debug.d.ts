/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/plus
 * @param arr `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function plus(arr?: Array<number>): number;
