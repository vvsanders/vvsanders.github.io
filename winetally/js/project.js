$( document ).ready(function() {
    $('#about').mouseover(function() {
        $('p').css('visibility', 'visible');
    });

    $('#about').mouseout(function() {
        $('p').css('visibility', 'hidden');
    });


    // Mouse over
    $('#main a').mouseover(function() {
        var color = '#' + $(this).attr('id');

        if ($(window).width() > 640) {
            $('body').css('background-color', color);
            $(this).css('color', "white");
        } else {
            $(this).css('color', color);
        }
    });

      $('#foodlist a').mouseover(function() {
        var color = '#' + $(this).attr('id');

        if ($(window).width() > 640) {
            $('body').css('background-color', color);
            $(this).css('color', "white");
        } else {
            $(this).css('color', color);
        }
    });

    // Mouse out    
    $('#main a').mouseout(function() {
         var color = '#' + $(this).attr('id');

        if ($(window).width() > 640) {
            $('body').css('background-color', 'white');
            $(this).css('color', 'black');
        } else {
            $(this).css('color', color);
        }

    });

    $('#foodlist a').mouseout(function() {
         var color = '#' + $(this).attr('id');

        if ($(window).width() > 640) {
            $('body').css('background-color', 'white');
            $(this).css('color', 'black');
        } else {
            $(this).css('color', color);
        }

    });


    $('#white').toggle(function() {
        $(this).toggleClass("ul",".whites");
    });

     $('#red').toggle(function() {
        $(this).toggleClass("ul",".red");
    });

});