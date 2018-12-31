/* On page Load */
$(document).ready(function(){ 
    //When headerLink is clicked, it scrolls to the element with the same id minus the Btn
    $('.headerLink').click(function(){
        let scrollID = this.id.substring(0,this.id.length-3);
        
        $('html, body').animate({
            scrollTop: $('#' + scrollID).offset().top - 100
        }, 750);
    });
});

/* UI */
