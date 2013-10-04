import baseLib = require('base-lib');

// Module
export module Module1Namespace {

    // Class
    export class Module1 {
        public someHandler(a: number, b: number): number {
            var lib: baseLib.BaseLibNamespace.IBaseLib = new baseLib.BaseLibNamespace.BaseLib();

            return lib.add(a, b);
        }
    }
}