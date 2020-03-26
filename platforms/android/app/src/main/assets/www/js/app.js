var $$ = Dom7;

Framework7.use(Framework7Keypad);

var app = new Framework7({
    root: '#app',
    name: 'Black Oud',
    theme: 'ios',
    version: 3.1,
    routes: routes,
    init: false,
    backend: 'http://new.blackoud.ru/',
    dialog: {
        buttonOk: 'Ок',
        buttonCancel: 'Отмена'
    },
    touch: {
        mdTouchRipple: false,
        tapHold: true,
        disableContextMenu: true,
        activeState: false
    },
    toast: {
        closeTimeout: 2000,
        closeButton: false
    },
    smartSelect: {
        pageBackLinkText: 'Назад',
        popupCloseLinkText: 'Готово',
        sheetCloseLinkText: 'Выбрать'
    },
    view: {
        iosDynamicNavbar: false,
        stackPages: true,
        preloadPreviousPage: true,
        removeElements: false,
        iosSwipeBackAnimateShadow: false,
        iosSwipeBackAnimateOpacity: false,
        mdSwipeBackAnimateShadow: false,
        mdSwipeBackAnimateOpacity: false
    },
    photoBrowser: {
        backLinkText: 'Закрыть',
        popupCloseLinkText: 'Закрыть',
        navbarOfText: 'из',
        swiper: {
            lazy: {
                enabled: false
            }
        }
    },
    lazy: {
        placeholder: 'img/no_image.png',
        threshold: 1000,
        sequential: false
    },
    statusbar: {
        iosOverlaysWebView: false,
        androidOverlaysWebView: false,
        iosTextColor: 'white',
        androidTextColor: 'white',
        iosBackgroundColor: '#be9d60',
        androidBackgroundColor: '#be9d60'
    },
    popup: {
      animate: false
    },
    clientType: function () {

        if (localStorage.clientType !== undefined) {

            return localStorage.clientType;

        } else {

            return 'retail';

            localStorage.clientType = 'retail'

        }

    },
    minFlakonsQuantity: function () {

        var config = JSON.parse(localStorage.config);

        if (app.params.clientType() == 'retail') {

            return Number(config.minFlakonsQuantity.retail);

        } else {

            return Number(config.minFlakonsQuantity.wholesale);

        }

    },
    minAromaVolume: function () {

        var config = JSON.parse(localStorage.config);

        if (app.params.clientType() == 'retail') {

            return Number(config.minAromaVolume.retail);

        } else {

            return Number(config.minAromaVolume.wholesale);

        }

    },
    minOrderSum: function () {

        var config = JSON.parse(localStorage.config);

        if (app.params.clientType() == 'retail') {

            return Number(config.minOrderSum.retail);

        } else {

            return Number(config.minOrderSum.wholesale);

        }

    },
    methods: {
        onesignal: function () {

            try {

                window.plugins.OneSignal.startInit('782c773e-296c-4851-a36c-afb036ceb572').endInit();

            } catch (error) {

                console.log(error);

            }

        },
        checkVersion: function (callback) {

            var app = this;

            app.request.json(app.params.backend + '/api', function (response) {

                var config = response;

                app.params.config = config;

                localStorage.config = JSON.stringify(config);

                if (config.version > app.version) {

                    app.dialog.alert('Вышла новая версия приложения, обновитесь пожалуйста.', function () {

                        if (app.device.ios) {

                            window.open(config.updateLink.ios, '_system');

                        } else {

                            window.open(config.updateLink.android, '_system');

                        }

                    });

                }

                if (callback) {

                    callback();

                }

            });

        },
        removeFromCart: function(offerUid, callback) {

            var cart = JSON.parse(localStorage.cart);

            cart = cart.filter(function (offer) {

                return Number(offer.uid) !== Number(offerUid);

            });

            localStorage.cart = JSON.stringify(cart);

            if (callback) {

                callback();

            }

        },
        addToCart: function(offer, callback) {

            var cart;

            if (localStorage.cart !== undefined) {

                cart = JSON.parse(localStorage.cart);

            } else {

                cart = [];

            }

            cart.push(offer);

            localStorage.cart = JSON.stringify(cart);

            app.emit('cart:change');

            if (callback) {

                callback();

            }

        },
        backButton: function (closeApp = true) {

            var views = [];

            for (var i = 0; i < app.views.length; i++) {

                var view = app.views[i];

                views.push(view.params.url);

            }

            if (closeApp) {

                if (views.indexOf(app.views.current.router.url) !== -1) {

                    app.dialog.confirm('Вы уверены что хотите закрыть приложение?', function () {

                        navigator.app.exitApp();

                    });

                    return false;

                }

            }

            if ($$('.popover.modal-in').length > 0) {

                var popover;

                if ($$('.popover.modal-in').length > 1) {

                    popover = app.popover.get($$('.popover.modal-in:last-child'));

                } else {

                    popover = app.popover.get($$('.popover.modal-in'));

                }

                popover.close();

                return false;

            }

            if ($$('.popup.modal-in').length > 0) {

                var popup;

                if ($$('.popup.modal-in').length > 1) {

                    popup = app.popup.get($$('.popup.modal-in:last-child'));

                } else {

                    popup = app.popup.get($$('.popup.modal-in'));

                }

                popup.close();

                return false;

            }

            if ($$('.sheet-modal.modal-in').length > 0) {

                var popup;

                if ($$('.sheet-modal.modal-in').length > 1) {

                    sheet = app.sheet.get($$('.sheet-modal.modal-in:last-child'));

                } else {

                    sheet = app.sheet.get($$('.sheet-modal.modal-in'));

                }

                sheet.close();

                return false;

            }

            app.views.current.router.back();

        },
        noteImage: function (name) {

            var hash = 0, i, chr;

            if (name == undefined) return hash;

            if (name.length === 0) return hash;

            for (i = 0; i < name.length; i++) {

                chr   = name.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0;

            }

            return app.params.backend + '/storage/app/media/notes/' + hash + '.jpg';

        }
    },
    on: {
        init: function () {

        }
    }
});

$$(document).on('deviceready', function () {

    app.init();

    app.request.setup({
        beforeSend: function(xhr) {

        },
        complete: function(xhr) {

            console.log(xhr);

        },
        error: function () {

        }
    });

    app.methods.checkVersion(function () {

        app.emit('ready');

    });

    if (localStorage.config !== undefined) {

        app.params.config = JSON.parse(localStorage.config);

        setTimeout(function () {

            app.emit('ready');

        });

    }

    try {

        Keyboard.shrinkView(true);
        Keyboard.disableScrollingInShrinkView(true);

    } catch (error) {}

    app.on('ready', function () {

        app.methods.onesignal();

        app.views.create('#view-main', {
            url: '/main',
            animate: app.device.ios ? false : false,
            main: true
        });

        app.views.create('#view-stocks', {
            url: '/stocks',
            animate: app.device.ios ? false : false
        });

        app.views.create('#view-help', {
            url: '/help',
            animate: app.device.ios ? false : false
        });

        app.views.create('#view-cart', {
            url: '/cart',
            animate: app.device.ios ? false : false
        });

        app.views.create('#view-contacts', {
            url: '/branches',
            animate: app.device.ios ? false : false
        });

        setTimeout(function () {

            if (app.device.ios) {

                app.statusbar.hide();
                app.statusbar.show();

                setTimeout(function () {

                    app.statusbar.setBackgroundColor('#be9d60');

                    app.statusbar.setTextColor('white');

                }, 100);

            }

            navigator.splashscreen.hide();

        }, 1500);

        setTimeout(function () {

            navigator.splashscreen.hide();

        }, 1000);

    });

    if (app.device.android) {

        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);

    }

    $$(document).on('backbutton', function (event) {

        app.methods.backButton();

    });

    $$(document).on('popup:open', function (event) {

        $$(event.target).addClass('theme-dark');

    });

    $$(document).on('tab:show', function () {

        var first = true;

        $$(document).off('click', '.toolbar-menu .tab-link-active').on('click', '.toolbar-menu .tab-link-active', function (event) {

            if (!first) {

                console.log(event)

                app.methods.backButton(false);

            }

            first = false;

        });

    });

    $$(document).trigger('tab:show');

    $$(window).on('keyboardWillShow', function () {

        $$('.toolbar-menu').css('visibility', 'hidden');

    });

    $$(window).on('keyboardWillHide', function () {

        $$('.toolbar-menu').css('visibility', 'visible');

    });

    $$(document).on('swipeback:beforechange', function () {

        $$('.toolbar-menu').css('opacity', '1');

    });

});
