require(['jquery'], function ($) {

    $(document).ready(function () {

        $('#btn1').click(function () {
            require(['module1'], function (m1) {
                var module1 = new m1.Module1Namespace.Module1();

                alert(module1.someHandler(1, 1));
            });
        });

        $('#btn2').click(function () {
            require(['module2'], function (m2) {
                var module2 = new m2.Module2Namespace.Module2();

                alert(module2.someHandler(5, 3));
            });
        });

        $('#btn3').click(function () {
            require(['module2'], function (m2) {
                var module2 = new m2.Module2Namespace.Module2();

                alert(module2.someHandler(5, 5));
            });
        });

    });

});