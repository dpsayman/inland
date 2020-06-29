$(window).on('load', function () { // make sURE WHOLe website is loaded//
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* Responsive Tabs */
    
$(function () {
    $("#services-tabs").responsiveTabs({
       animation:'slide'
    });
});

/*-- Portfolio -- */
$(window).on('load', function () {
   
    // Initialize isotope //
    $("#isotope-container").isotope ({
    });
    
    //filter items on button click 
    $("#isotope-filters").on('click', 'button', function() {
       
        //get filter value
        var filtervalue = $(this).attr('data-filter');
       // filter porfolio
        $("#isotope-container").isotope ({
            filter: filtervalue
    });
        // active button 
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});
// Manefic Popup plugin
$(function () {

    $("#portfolio-wrapper").magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
        gallery: {
        enabled: true
    }
        
    
    });
    
    });


/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

