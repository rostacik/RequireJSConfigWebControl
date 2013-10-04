var baseLib = require("./base-lib");

// Module
(function (Module2Namespace) {
    // Class
    var Module2 = (function () {
        function Module2() {
        }
        Module2.prototype.someHandler = function (a, b) {
            var lib = new baseLib.BaseLibNamespace.BaseLib();

            return lib.sub(a, b);
        };
        return Module2;
    })();
    Module2Namespace.Module2 = Module2;
})(exports.Module2Namespace || (exports.Module2Namespace = {}));
var Module2Namespace = exports.Module2Namespace;

