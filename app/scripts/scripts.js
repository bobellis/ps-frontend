$(document).ready(function(){
    $('#about_me_link').click(function(event){
        $('#projects').hide("drop", { direction: "down"}, "fast");
        $('#about_me').show("drop", { direction: "up"}, "slow");
    });

    $('#projects_link').click(function(event){
        $('#projects').show("drop", { direction: "down"}, "slow");
        $('#about_me').hide("drop", { direction: "up"}, "fast");
    });


})
