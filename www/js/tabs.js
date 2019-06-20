
(function() {
    const tabLink = $('.tab-menu__btn');
    const tabItem = $('.tabs__item');

    const tabsHandler = function(event) {
        event.preventDefault();
        const targetItem = $(this).attr('href');
        tabItem.removeClass('tabs__item--active');

        $(targetItem).addClass('tabs__item--active');
    }

    tabLink.on('click', tabsHandler);
})(jQuery);





// $('.js-tab-tigger').on('click', function() {
// var tabName =$(this).data('tab');
//    tab =$ ('.js-tab-tigger [data-tab="'+tabName+'"]');

//    $('.js-tab-content.active').removeClass('active');
//    tab.addClass('active');



// })
