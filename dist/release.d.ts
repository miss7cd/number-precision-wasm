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
 * @param len `i32`
 * @returns `f64`
 */
export declare function plus(arr: Array<number>, len: number): number;
/**
 * assembly/index/minus
 * @param arr `~lib/array/Array<f64>`
 * @param len `i32`
 * @returns `f64`
 */
export declare function minus(arr: Array<number>, len: number): number;
/**
 * assembly/index/times
 * @param arr `~lib/array/Array<f64>`
 * @param len `i32`
 * @returns `f64`
 */
export declare function times(arr: Array<number>, len: number): number;
/**
 * assembly/index/divide
 * @param arr `~lib/array/Array<f64>`
 * @param len `i32`
 * @returns `f64`
 */
export declare function divide(arr: Array<number>, len: number): number;
/**
 * assembly/index/average
 * @param arr `~lib/array/Array<f64>`
 * @param len `i32`
 * @returns `f64`
 */
export declare function average(arr: Array<number>, len: number): number;
