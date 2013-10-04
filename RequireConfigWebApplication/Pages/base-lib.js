define(["require", "exports"], function(require, exports) {
    // Module
    (function (BaseLibNamespace) {
        // Class
        var BaseLib = (function () {
            function BaseLib() {
            }
            BaseLib.prototype.add = function (a, b) {
                return a + b;
            };
            BaseLib.prototype.sub = function (a, b) {
                return a - b;
            };
            return BaseLib;
        })();
        BaseLibNamespace.BaseLib = BaseLib;
    })(exports.BaseLibNamespace || (exports.BaseLibNamespace = {}));
    var BaseLibNamespace = exports.BaseLibNamespace;
});
