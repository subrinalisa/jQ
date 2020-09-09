$(document).ready(function () {
    //    focus
    $('#focus').focus(function () {
        $('span').fadeOut(2000);
    });
    //    Focusin/Focusout 
    $('.focusin input').focusin(function () {
        $(this).css("background-color", "#eee");
    });
    $('.focusin input').focusout(function () {
        $(this).css("background-color", "#fff");
    });
    //    blur
    $('#blur_input').blur(function () {
        alert("input lost focus!");
    });
    //    change
    $('#change_input').change(function () {
        alert("text has changed!");
    });
    //    click
    $('#clk').click(function () {
        $('#text').hide();
    });
    //    dblclick
    $('#dblclk').dblclick(function () {
        $('#text2').hide();
    });
    //    mouseenter/mouseleave
    $('.mouseenter p').mouseenter(function () {
        $(this).css("color", "yellow");
    });
    $('.mouseenter p').mouseleave(function () {
        $(this).css("color", "red");
    });
    //    hover
    $('.hover p').hover(function () {
        $(this).css("color", "blue");
    }, function () {
        $(this).css("color", "pink");
    });
    //    mousemove/mouseout
    $('.mousemove p').mousemove(function () {
        $(this).css("text-decoration", "underline");
    });
    $('.mousemove p').mouseout(function () {
        $(this).css("background-color", "green");
    });
    //    on/off
    $('.onoff p').on({
        mouseenter: function () {
            $(this).css("color", "blue");
        },
        mouseleave: function () {
            $(this).css("color", "red");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
    $('.onoff a').click(function () {
        $('.onoff p').off("click");
    });
    //    scroll
    $('.scroll p').scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.scroll').css("background", "yellow");
        } else {
            $('.scroll').css("background", "red");
        }
    });
    //    submit
    $('.submit form').submit(function () {
        alert("Successfully Submitted");
    });
    //    animate
    $('.animate button').click(function () {
        $(".animate .box").animate({
            height: 300
        }, 1500);
        $(".animate .box").animate({
            width: 300
        }, 1500);
    });
    $('#start').click(function () {
        $(".animate .box").animate({
            height: 300
        }, 1500);
        $(".animate .box").animate({
            width: 300
        }, 1500);

    });
    $('#finish').click(function () {
        $(".animate .box").finish();
    });
    $('#end').click(function () {
        $(".animate .box").clearQueue();
    });
    //    fade
    $('#fadeIn').click(function () {
        $('.Fade p').fadeIn("slow");
    });
    $('#fadeOut').click(function () {
        $('.Fade p').fadeOut("slow");
    });
    $('#fadeTo').click(function () {
        $('.Fade p').fadeTo("slow", 0.5);
    });
    $('#fadeToggle').click(function () {
        $('.Fade p').fadeToggle("slow");
    });
    //    hide/show/toggle
    $('#hide').click(function () {
        $('.hst p').hide("slow");
    });
    $('#show').click(function () {
        $('.hst p').show("slow");
    });
    $('#toggle').click(function () {
        $('.hst p').toggle("slow");
    });
    //    slideUp/slideDown/slideToggle
    $('#up').click(function () {
        $('.slide p').slideUp("slow");
    });
    $('#down').click(function () {
        $('.slide p').slideDown("slow");
    });
    $('#st').click(function () {
        $('.slide p').slideToggle("slow");
    });
    //    addClass
    $('.addcls p:first').click(function () {
        $('.addcls').addClass("bgyellow font");
    });
    //    removeClass
    $('.addcls p:last').click(function () {
        $('.addcls').removeClass("bgyellow");
    });
    //    removeClass
    $('.addcls button').click(function () {
        $('.addcls').toggleClass("bgyellow");
    });
    //    before/after
    $('#bf').click(function () {
        $('.bfaf p').before("<p>Hello world</p>");
    });
    $('#af').click(function () {
        $('.bfaf p').after("<p>Hello world</p>");
    });
    //    append/prepend
    $('#ap').click(function () {
        $('.appp ol').append("<li>Banana</li>");
    });
    $('#pp').click(function () {
        $('.appp ol').prepend("<li>Cherry</li>");
    });
    //    clone
    $('.clone button').click(function () {
        $('.clone p').clone().appendTo('.clone');
    });

});
