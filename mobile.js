$(document).ready(function() {
    if ($(window).width() < 700) {
        // alert('Less than 960');
        $('#top').show()
        $('#nav').addClass('hide');
        $('#nav').css({'position': 'fixed',
            'top':'30px',
            'z-index':105
        });
        $('.item').css({'width':'100%'})
        $('#button').click(()=>{
            $('#nav').toggleClass('hide');
        });
    } else {
        // alert('More than 960');
    }
});