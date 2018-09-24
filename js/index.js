/* On page load */
$(document).ready(function(){
    //Makes every sumBox in the same row the same height
    for(let i = 1; i <= $('#sumBoxContainer > div').length; i++) {
        if($(sumBoxElement(i, 1)).css('height') > $(sumBoxElement(i, 2)).css('height')) {
            $(sumBoxElement(i, 2)).css('height', $(sumBoxElement(i, 1)).css('height'));
        }
        else {
            $(sumBoxElement(i, 1)).css('height', $(sumBoxElement(i, 2)).css('height'));
        }
    }
    
});

/* Helper functions */
//Returns the selector of the card-body of the sumBoxes for the for loop in document.ready
function sumBoxElement(i, x) {
    return '#sumBoxContainer > .row:nth-child(' + i + ') > .sumBox:nth-child(' + x + ') > .card > .card-body';
}