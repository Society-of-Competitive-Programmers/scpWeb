/* On page load */
$(document).ready(function(){ 
    reSizeSumBoxes();
});

//When window size is changed
$(window).resize(function(){
    reSizeSumBoxes();
});

/* UI Experience */
//Makes every sumBox in the same row the same height
function reSizeSumBoxes() {
    for(let i = 1; i <= $('#sumBoxContainer > .row').length; i++) {
        $(sumBoxElement(i, 1)).css('height', ''); 
        $(sumBoxElement(i, 2)).css('height', '');
    }

    for(let i = 1; i <= $('#sumBoxContainer > .row').length; i++) {
        if($(sumBoxElement(i, 1)).css('height') > $(sumBoxElement(i, 2)).css('height')) {
            $(sumBoxElement(i, 2)).css('height', $(sumBoxElement(i, 1)).css('height'));
        }
        else {
            $(sumBoxElement(i, 1)).css('height', $(sumBoxElement(i, 2)).css('height'));
        }
    }

    //$('#content').css('min-height','calc(100% - 96px);');
}

/* Helper functions */
//Returns the selector of the card-body of the sumBoxes for the for loop in document.ready
function sumBoxElement(i, x) {
    return '#sumBoxContainer > .row:nth-child(' + i + ') > .sumBox:nth-child(' + x + ') > .card > .card-body';
}