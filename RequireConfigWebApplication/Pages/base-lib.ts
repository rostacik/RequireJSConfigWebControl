// Module
export module BaseLibNamespace {
    // Interface
    export interface IBaseLib {
        add(a: number, b: number);
        sub(a: number, b: number);
    }

    // Class
    export class BaseLib implements IBaseLib {
        add(a: number, b: number) {
            return a + b;
        }
        sub(a: number, b: number) {
            return a - b;
        }
    }
}