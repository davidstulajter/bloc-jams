
var animatePoints = function() {   
    
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
 
    $.each($('.point'), revealPoint);
};

$(window).load = function() {
    if ($(window).height() > 950) {
        animatePoints();
    }
    // Above, we automatically animate the points on tall screens when scrolling is disabled
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    $(window).scroll(function(event) {
        // console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        } 
    });
});



