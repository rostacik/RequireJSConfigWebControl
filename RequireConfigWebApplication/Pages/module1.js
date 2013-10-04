define(["require", "exports", 'base-lib'], function(require, exports, __baseLib__) {
    var baseLib = __baseLib__;

    // Module
    (function (Module1Namespace) {
        // Class
        var Module1 = (function () {
            function Module1() {
            }
            Module1.prototype.someHandler = function (a, b) {
                var lib = new baseLib.BaseLibNamespace.BaseLib();

                return lib.add(a, b);
            };
            return Module1;
        })();
        Module1Namespace.Module1 = Module1;
    })(exports.Module1Namespace || (exports.Module1Namespace = {}));
    var Module1Namespace = exports.Module1Namespace;
});
