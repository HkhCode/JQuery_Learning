$(document).ready(function(){
    $("#content").hide();
    $("#panel").hide();
    $("#content-control").on({
        click : function() {
            $("#content").fadeIn(2000);
        },
        dblclick : function() {
            $("#content").fadeOut(1000);
        }
    }); //fadeIn fadeOut fadeToggle fadeTo 
    $("button:first").dblclick(function(){
        $("p").hide();
    });
    $("p").mouseenter(function(){
        $("button:first").hide(/*function() {
            alert("P hided!"); // callback function!
        }*/);
    });
    $("#sp").on({
        mouseenter : function() {
            $(this).css("background-color" , "red");
        } , 
        mouseleave : function() {
            $(this).css("background-color" , "green");
        },
        click : function() {
            $(this).css("background-color" , "brown");
        }
    });
    $("#panel-control").on("click" , function() {
        $("#panel").slideDown();
    });
    $("#panel-control").on("dblclick" , function() {
        $("#panel").slideUp();
    });
    $("#box").click(function() {
        $(this).animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
          } , "slow");
    });
    $("#box").mouseenter(function() {
        $(this).stop();
    });
    // JQuery Chaining !
    $("#box2").click(function() {
        $(this).css('background-color' , 'red').slideUp(2000).slideDown(2000);
    });
    $("#SayHello").on('click' , function() {
        var content = $('#theSayHelloContent').text();
        var linkHref = $("#testAttr").attr("href");
        alert(linkHref);
        alert(content);
    });
    $('#SetHello').click(function(){
        $('#theSayHelloContent').text('Hello !');
        $('#testAttr').attr({
            'href' : 'www.microsft.com',
            'alt' : 'None!'
        });
        $('#theSayHelloContent').append('HELLO');
        $('#theSayHelloContent').prepend('hello');
    });
    $("#adremover").click(function() {
        $('#adds').remove();
    });
    $("#box3").on('click' , function () {
        $(this).toggleClass('colorWhite');
    });
    var parents = $("#box3").parents();
    alert(parents);
    $('#box3').find('p.first'); // p with class first
    $('#box3').find('*'); // all decendant elements
});