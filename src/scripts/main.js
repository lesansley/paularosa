
// Object initializer
var paulaRosa = {
    pages: {
        home: [
            {label: 'About', src: '/about'},
            {label: 'Contact', src: '/contact'}
        ],
        boudoir: [
            {label: 'About', src: '/boudoir/about'},
            {label: 'Blog', src: '/boudoir/blog'},
            {label: 'Prices', src: '/boudoir/prices'},
            {label: 'FAQs', src: '/boudoir/faq'},
            {label: 'Contact', src: '/contact'}
        ],
        pets: [
            {label: 'About', src: '/pets/about'},
            {label: 'Prices', src: '/pets/prices'},
            {label: 'FAQs', src: '/pets/faq'},
            {label: 'Contact', src: '/contact'}
        ],
        family: [
            {label: 'About', src: '/family/about'},
            {label: 'Blog', src: '/family/blog'},
            {label: 'Prices', src: '/family/prices'},
            {label: 'FAQs', src: '/family/faq'},
            {label: 'Contact', src: '/contact'}
        ],
        commercial: [
            {label: 'About', src: '/commercial/about'},
            {label: 'News', src: '/commercial/news'},
            {label: 'FAQs', src: '/commercial/faq'},
            {label: 'Contact', src: '/contact'}
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

/******************CONTROLLER******************/

// Return all
function getAll(param) {
    var collection;
    if(param) {
        collection = paulaRosa[param];
    }
    else {
        collection = paulaRosa;
    }
    return collection;
}

//Return
function getGenre(param, genre) {

}
/******************VIEW******************/

function loadImages() {
    imageCollection = getAll('images');
    if(!imageCollection) {
        console.log('ERROR: No such property exits')
    }
};

function transformScale(elem, x, y) {
    $(elem).css({
        'transform': 'scale(' + x + ' ,' + y + ')',
        MozTransform: 'scale(' + x + ' ,' + y + ')',
        WebkitTransform: 'scale(' + x + ' ,' + y + ')',
        msTransform: 'scale(' + x + ' ,' + y + ')'
    });
}

// Make navigation bar sticky to the top of the screen
function setNavBar() {
    var oldScroll = 0,
        topBar = $('.top-bar'),
        topPad = $('.padding')
        cnt = $('.container'),
        mns = 'main-nav-scrolled',
        menuBarHeight = topBar.height(), // Get the height of the header bar
        scrollStick = 25; // Scroll value at which the menu sticks
        stickyMenuBarHeight = menuBarHeight - scrollStick; // Height of the sticky menu
        logoImage = $('.logo-image'),
        logoPadding = logoImage.css('padding-bottom').match(/\d+/)[0], // Extract numbers from the string
        correctionFactor = 1.3; // Used in scaling the logo during page scroll

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();

        if(scroll < scrollStick) {
            topBar.removeClass(mns); // Remove class 'main-nav-scrolled' to the header
            topPad.addClass('do-not-display'); // Change display of the padding to none
            if(scroll < oldScroll) {
                //Scrolling page down
                topBar.height(menuBarHeight); // Set the height of the navigation bar back to normal
                var scaleFactor = 1 / ((menuBarHeight + (scroll * correctionFactor)) / menuBarHeight); // Set the scaling factor for the logo
                transformScale(logoImage, scaleFactor, scaleFactor);
                var updatedLogoPadding = Math.round(logoPadding-(logoPadding / scrollStick) * scroll);
                logoImage.css({'padding-bottom': updatedLogoPadding + 'px'});
            }
            else {
                // Scrolling page up
                var updatedLogoPadding = Math.round(logoPadding - (logoPadding / scrollStick) * scroll)
                var scaleFactor = (menuBarHeight - (scroll * correctionFactor)) / menuBarHeight; //
                logoImage.css({'padding-bottom': updatedLogoPadding + 'px'});
                transformScale(logoImage, scaleFactor, scaleFactor);
            }
        }
        else {
            logoImage.css({'padding-bottom': '0px'});
            topBar.height(stickyMenuBarHeight); // Set the menu bar height
            topBar.addClass(mns); // Add class 'main-nav-scrolled' to the header to set css properties
            topPad.removeClass('do-not-display'); // Remove 'do-not-display' class from the topPad so that the page does not jump up
            topPad.height(menuBarHeight); // Set the height of the topPad to that of the header bar
            }
        oldScroll = scroll;
    });
}

$(function() {
    loadImages();
    setNavBar();

});