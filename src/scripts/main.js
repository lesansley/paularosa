var paulaRosa = {
    pages: {
        home: [
            { label: 'About', src: '/about' },
            { label: 'Contact', src: '/contact' }
        ],
        boudoir: [
            { label: 'About', src: '/boudoir/about' },
            { label: 'Blog', src: '/boudoir/blog' },
            { label: 'Prices', src: '/boudoir/prices' },
            { label: 'FAQs', src: '/boudoir/faq' },
            { label: 'Contact', src: '/contact'}
        ],
        pets: [
            { label: 'About', src: '/pets/about' },
            { label: 'Prices', src: '/pets/prices' },
            { label: 'FAQs', src: '/pets/faq' },
            { label: 'Contact', src: '/contact'}
        ],
        family: [
            { label: 'About', src: '/family/about' },
            { label: 'Blog', src: '/family/blog' },
            { label: 'Prices', src: '/family/prices' },
            { label: 'FAQs', src: '/family/faq' },
            { label: 'Contact', src: '/contact'}
        ],
        commercial: [
            { label: 'About', src: '/commercial/about' },
            { label: 'News', src: '/commercial/news' },
            { label: 'FAQs', src: '/commercial/faq' },
            { label: 'Contact', src: '/contact'}
        ]
    },
    images: {
        boudoir: [
            {name: 'folio', src: '', alt: ''}
        ],
        pets: [
            {name: 'great-dane', src: '', alt: ''}
        ],
        family: [
            {name: 'brothers', src: '', alt: ''}
        ],
        commercial: [
            {name: 'great dane', src: '', alt: ''}
        ]
    }
};

function loadImages() {
    console.log(paulaRosa.images.boudoir[0].name)
};

function setNavBar() {
    var topBar = $('.top-bar'),
        topPad = $('.padding')
        cnt = $('.container'),
        mns = "main-nav-scrolled",
        scroll = $( window ).scrollTop(),
        padHeight = topBar.height();

    if(scroll) {
        topBar.addClass(mns);
        topPad.removeClass('invisible');
        topPad.height(padHeight);

    }
    else {
        topBar.removeClass(mns);
        topPad.addClass('invisible');
    }
}

$(function() {
    loadImages();

    $( window ).on('scroll', function() {
        setNavBar();
    });
});