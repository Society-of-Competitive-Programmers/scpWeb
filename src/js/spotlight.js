$(document).ready(function(){ 
    sizeImg();
});

$(window).resize(function(){
    sizeImg();
});

function sizeImg() {
    $('.center').css('height', parseInt($('.center').css('width'), 10)/(1.33) + 'px')
}