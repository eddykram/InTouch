$(document).ready(function() {
    var headphonesColor = $(this).attr('.data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');

});

