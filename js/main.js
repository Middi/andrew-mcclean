$(document).ready(function () {
    
// ===========================
// Mobile Nav
// ===========================

$('#hamburger').click(function () {
if ($('nav').hasClass('hidden')) {
     $('nav').slideDown( "slow", function() {
        $('nav').removeClass('hidden');
     });
}
else {
    $('nav').slideUp( "slow", function() {
        $('nav').addClass('hidden');
    });
}
});

      
// ===========================
// Smooth Scrolling
// ===========================

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);

            $('#menu').slideUp( "slow", function() {
            $('#menu').addClass('hidden');
            
            });
            return false;
        }
    }
});      
});