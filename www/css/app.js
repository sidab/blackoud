var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    name: 'Delivery',
    theme: 'md',
    version: 1.0,
    routes: routes,
    init: false,
    user: localStorage.user ? localStorage.user : false,
    dialog: {
        buttonOk: 'Ок',
        buttonCancel: 'Отмена'
    },
    touch: {
        mdTouchRipple: false,
        tapHold: false,
        disableContextMenu: true,
        activeState: true,
        fastClicks: true
    },
    toast: {
        closeTimeout: 2000
    },
    smartSelect: {
        pageBackLinkText: 'Назад',
        popupCloseLinkText: 'Готово',
        sheetCloseLinkText: 'Выбрать'
    },
    view: {
        animate: true,
        iosDynamicNavbar: false,
        //mdPageLoadDelay: 100,
        stackPages: true,
        preloadPreviousPage: true,
        removeElements: false,
        iosSwipeBack: true,
        mdSwipeBack: true,
        iosSwipeBackAnimateShadow: false,
        iosSwipeBackAnimateOpacity: false,
        mdSwipeBackAnimateShadow: false,
        mdSwipeBackAnimateOpacity: false,
        componentCache: false
    },
    photoBrowser: {
        backLinkText: 'Закрыть',
        navbarOfText: 'из',
        popupCloseLinkText: 'Закрыть',
        swiper: {
            lazy: {
                enabled: false
            }
        }
    },
    sheetModal: {
        closeByOutsideClick: true,
        swipeToClose: true,
        sheetCloseLinkText: 'Выбрать',
        backdrop: true
    },
    methods: {
    },
    on: {
        init: function () {

        }
    }
});

$$(document).on('DOMContentLoaded', function () {

    app.init();

    app.request.setup({
        beforeSend: function(xhr) {

            app.preloader.show();

        },
        complete: function(xhr) {

            console.log(xhr);

            app.preloader.hide();

        },
        error: function () {

        }
    });

    app.views.create('.view-main', {
        url: app.params.user ? '/orders' : '/auth',
        masterDetailBreakpoint: 800,
        main: true
    });

});
