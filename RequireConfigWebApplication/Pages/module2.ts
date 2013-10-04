import baseLib = require('base-lib');

// Module
export module Module2Namespace {

    // Class
    export class Module2 {
        public someHandler(a: number, b: number): number {
            var lib: baseLib.BaseLibNamespace.IBaseLib = new baseLib.BaseLibNamespace.BaseLib();

            return lib.sub(a, b);
        }
    }
}