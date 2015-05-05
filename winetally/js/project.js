// $('#sparkling a').on({
//     mouseover: function(){
//         $('body').css({background: '#dfdeae'});
//     },
//      mouseleave: function(){
//         $('body').css({background: 'white'});
//     },
//     click: function(){
//         $(this).off('mouseleave');
//     }

// });
$( document ).ready(function() {
    $('#about').mouseover(function() {
        $('p').css('visibility', 'visible');
    });

    $('#about').mouseout(function() {
        $('p').css('visibility', 'hidden');
    });

    $('.sparkling').mouseover(function() {
        $('body').css("background-color","#dfdeae");
    });

    // $(window).resize(function(){
    //     if($(window).width() <= 640) {
    //         $("#sparkling a").css("color", "#dfdeae");
    //     }
    // }); 

    $(window).resize(function(){
        if ($(window).width() <= 640){
        $('body').css("background-color", "white");
        }
        if($(window).width() <= 640) {
            $(".sparkling a").css("color", "#dfdeae");
        }
    });


    $('.drywhite').mouseover(function() {
        $('body').css("background-color","#dedfa3");
    });

    $(".sweet").mouseover(function() {
        $('body').css("background-color","#eed47b");
    });

    $('.richwhite').mouseover(function() {
        $('body').css("background-color","#fbcf69");
    });

    $('.rose').mouseover(function() {
        $('body').css("background-color","#ffb6cb");
    });

    $('.lightred').mouseover(function() {
        $('body').css("background-color","#b51d39");
    });

    $('.mediumred').mouseover(function() {
        $('body').css("background-color","#7d0c2a");
    });

    $('.boldred').mouseover(function() {
        $('body').css("background-color","#430725");
    });

    $('.dessert').mouseover(function() {
        $('body').css("background-color","#822323");
    });

    $('.mediumbold').mouseover(function() {
        $('body').css("background-image","-webkit-gradient(linear, left top, left bottom, from(#7d0c2a), to(#430725))");
    });

    $('.dessertsparkling').mouseover(function() {
        $('body').css("background-image","-webkit-gradient(linear, left top, left bottom, from(#822323), to(#dfdeae))");
    });

    $('.dryred').mouseover(function() {
        $('body').css("background-image","-webkit-gradient(linear, left top, left bottom, from(#dedfa3), to(#7d0c2a))");
    });

    $('.richlight').mouseover(function() {
        $('body').css("background-image","-webkit-gradient(linear, left top, left bottom, from(#fbcf69), to(#b51d39))");
    });

    $('li').mouseout(function() {
        $('body').css("background-color","white");
        $('body').css("background-image", "none");
    });

});