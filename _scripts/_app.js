$(document).ready(function () {
    app.Init();
});

var app = (function (_module) {

    _module.Init = function () {
        route();
    };

    var route = function () {

        $(window).on('hashchange', function (e) {
            var page = "home";

            if (window.location.hash) {
                page = window.location.hash.replace("#", "");
            }

            loadPage(page);

        });

        if (window.location.hash) {
            $(window).trigger('hashchange')
        } else {
            loadPage("home");
        };
    };

    var loadPage = function (page) {
        var pageURL = "/_pages/_" + page + ".html";

        $.ajax({
            url: pageURL
        }).done(function (html) {
            $('[data-content="main"]').html(html);
        }).fail(function (resp) {
            loadPage("404");
        });
    };

    return _module;
}(app || {}));