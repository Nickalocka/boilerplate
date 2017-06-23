$(document).ready(function(){
    app.Init();
});

var app = (function (_module) {

    _module.Init = function () {
        console.log("doc ready");
    };

    return _module;
}(app || {}));