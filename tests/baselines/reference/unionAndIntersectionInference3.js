//// [unionAndIntersectionInference3.ts]
// Repro from #30720

type Maybe<T> = T | undefined;
declare function concatMaybe<T>(...args: (Maybe<T> | Maybe<T>[])[]): T[];
concatMaybe([1, 2, 3], 4);

// Repros from #32247

const g: <U, R, S>(com: () => Iterator<S, U, R> | AsyncIterator<S, U, R>) => Promise<U> = async <U, R, S>(com: () => Iterator<S, U, R> | AsyncIterator<S, U, R>): Promise<U> => {
  throw com;
};

interface Foo1<T> {
    test(value: T): void;
}

interface Bar1<T> {
    test(value: T | PromiseLike<T>): void;
}

declare let f1: <T>(x: Foo1<T> | Bar1<T>) => Promise<T>;
declare let f2: <U>(x: Foo1<U> | Bar1<U>) => Promise<U>;

f1 = f2;
f2 = f1;

type Foo2<T> = {
    test(value: T): void;
}

type Bar2<T> = {
    test(value: T | PromiseLike<T>): void;
}

declare let g1: <T>(x: Foo2<T> | Bar2<T>) => Promise<T>;
declare let g2: <U>(x: Foo2<U> | Bar2<U>) => Promise<U>;

g1 = g2;
g2 = g1;


//// [unionAndIntersectionInference3.js]
"use strict";
// Repro from #30720
concatMaybe([1, 2, 3], 4);
// Repros from #32247
const g = async (com) => {
    throw com;
};
f1 = f2;
f2 = f1;
g1 = g2;
g2 = g1;
