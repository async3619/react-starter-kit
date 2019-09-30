import flowRight from "lodash.flowright";

/* eslint-disable import/export */
type HOC<I, O> = (i: I) => O;

export default function compose<T1, T2>(a: HOC<T1, T2>): HOC<T1, T2>;
export default function compose<T1, T2, T3>(a: HOC<T1, T2>, b: HOC<T2, T3>): HOC<T1, T3>;
export default function compose<T1, T2, T3, T4>(a: HOC<T1, T2>, b: HOC<T2, T3>, c: HOC<T3, T4>): HOC<T1, T4>;
export default function compose<T1, T2, T3, T4, T5>(
    a: HOC<T1, T2>,
    b: HOC<T2, T3>,
    c: HOC<T3, T4>,
    d: HOC<T4, T5>,
): HOC<T1, T5>;
export default function compose<T1, T2, T3, T4, T5, T6>(
    a: HOC<T1, T2>,
    b: HOC<T2, T3>,
    c: HOC<T3, T4>,
    d: HOC<T4, T5>,
    e: HOC<T5, T6>,
): HOC<T1, T6>;
export default function compose<T1, T2, T3, T4, T5, T6, T7>(
    a: HOC<T1, T2>,
    b: HOC<T2, T3>,
    c: HOC<T3, T4>,
    d: HOC<T4, T5>,
    e: HOC<T5, T6>,
    f: HOC<T6, T7>,
): HOC<T1, T7>;

export default function compose(...args: HOC<any, any>[]): HOC<any, any> {
    return flowRight(...args);
}
