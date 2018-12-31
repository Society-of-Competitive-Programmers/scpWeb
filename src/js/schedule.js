$(document).ready(function(){
    glowCurrentEvent();
});

function glowCurrentEvent(){
    var d = new Date();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear() % 100;
    var dd = d.getDate();
    var strDate = ['' + (d.getMonth() + 1), '' + d.getDate(), '' + d.getFullYear()].join('/');
    
    let i = 0;
    for(i = 1; i < $('#schedTable > tbody').children().length; i++)
    {
        var eventDate = $('#schedTable > tbody > tr:nth-child(' + i + ') td:nth-child(2)').html().split('/');
        if(yy < eventDate[2] || mm < eventDate[0])
            break;
        else if(yy == eventDate[2] && mm == eventDate[0] && dd <= eventDate[1])
            break;
    }

    $('#schedTable > tbody > tr:nth-child(' + i + ')').css('background-color', '#FEC108');
}