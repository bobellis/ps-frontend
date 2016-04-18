$(document).ready(function(){
    $('#about-me-link').click(function(event){
        $('#projects').hide("fade", "fast");
        $('#about-me').show("fade", "fast");
    });

    $('#projects-link').click(function(event){
        $('#projects').show("fade", "fast");
        $('#about-me').hide("fade", "fast");
    });


})
