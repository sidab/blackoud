routes = [
    {
        path: '/main',
        componentUrl: 'pages/main/index.html'
    },
    {
        path: '/cart',
        componentUrl: 'pages/cart/index.html'
    },
    {
        path: '/stocks',
        componentUrl: 'pages/stocks/index.html'
    },
    {
        path: '/help',
        componentUrl: 'pages/help/index.html'
    },
    {
        path: '/help/about',
        componentUrl: 'pages/help/about.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/help/pay',
        componentUrl: 'pages/help/pay.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/help/documents',
        componentUrl: 'pages/help/documents.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/help/delivery',
        componentUrl: 'pages/help/delivery.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/cart/checkout',
        componentUrl: 'pages/cart/checkout/index.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/cart/checkout/success',
        componentUrl: 'pages/cart/checkout/success.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/branches',
        componentUrl: 'pages/branches/index.html'
    },
    {
        path: '/branches/branch',
        componentUrl: 'pages/branches/branch.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/main/items',
        componentUrl: 'pages/main/items/index.html',
        options: {
            transition: 'f7-dive',
        }
    },
    {
        path: '/main/items/filter',
        componentUrl: 'pages/main/items/filter.html',
        options: {
            transition: 'f7-flip',
        }
    },
    {
        path: '/main/items/item',
        componentUrl: 'pages/main/items/item.html',
        options: {
            //transition: 'f7-flip',
            transition: 'f7-dive'
        }
    }
]