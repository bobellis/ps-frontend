$(document).ready(function(){
    $(".menu-button").click(function(event){
        if(!($("dropdown-content").is(":visible"))){
            $(".dropdown-content").show("fade", "fast");
        } else {
            $(".dropdown-content").hide("fade", "fast");
        }
    })

    // $("body").click(function(event){
    //     if($("dropdown-content").is(":visible")){
    //         $(".dropdown").("fade", "fast");
    //     }
    // })

    $('#about-me-link').click(function(event){
        $('#projects').hide("fade", "fast");
        $('#about-me').show("fade", "fast");
        $(".dropdown-content").hide("fade", "fast");
    });

    $('#projects-link').click(function(event){
        $('#projects').show("fade", "fast");
        $('#about-me').hide("fade", "fast");
        $(".dropdown-content").hide("fade", "fast");
    });

    $("body").click(function(event){

    })
})
