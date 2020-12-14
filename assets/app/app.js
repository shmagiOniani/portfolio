document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/1000000
        const y = (window.innerHeight - e.pageY*speed)/1000000

        layer.style.transform = 'translate3d('+x+'px, '+y+'px, 0px)'
    })
}

function moveUp () {
    if($('#contact').hasClass('active')){
        $('#contact').removeClass('active');
        $('#about').addClass('active');
        // nav
        $('#nav-contact').removeClass('active-nav');
        $('#nav-about').addClass('active-nav');
        // arrows   
        $('#up-arrow').addClass('active-arrow');
        $('#down-arrow').addClass('active-arrow');

    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#home').addClass('active');
        // nav
        $('#nav-about').removeClass('active-nav');
        $('#nav-home').addClass('active-nav');
        // arrows   
        $('#up-arrow').removeClass('active-arrow');
        $('#down-arrow').addClass('active-arrow');
    }
}

function moveDown () {
    if($('#home').hasClass('active')){
        $('#home').removeClass('active');
        $('#about').addClass('active');
        // nav
        $('#nav-home').removeClass('active-nav');
        $('#nav-about').addClass('active-nav');
        // arrow
        $('#up-arrow').addClass('active-arrow');
        $('#down-arrow').addClass('active-arrow');

    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#contact').addClass('active');
        // nav
        $('#nav-about').removeClass('active-nav');
        $('#nav-contact').addClass('active-nav');
        // arrow
        $('#up-arrow').addClass('active-arrow');
        $('#down-arrow').removeClass('active-arrow');
    }
}

function aboutMeIn() {
    $('#about').removeClass('active');
    $('#more-me').addClass('active');
    $('#up-arrow').removeClass('active-arrow');
    $('#down-arrow').removeClass('active-arrow');
}

function aboutMeOut() {
    $('#more-me').removeClass('active');
    $('#about').addClass('active');
    $('#up-arrow').addClass('active-arrow');
    $('#down-arrow').addClass('active-arrow');
}

function homeActive() {
    $('#about').removeClass('active');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#home').addClass('active');
    // nav
    $('#nav-about').removeClass('active-nav');
    $('#nav-contact').removeClass('active-nav');
    $('#nav-home').addClass('active-nav');
    // arrow
    $('#up-arrow').removeClass('active-arrow');
    $('#down-arrow').addClass('active-arrow');
}
// function projectsActive() {
//     $('#home').removeClass('active');
//     $('#about').removeClass('active');
//     $('#more-me').removeClass('active');
//     $('#contact').removeClass('active');
//     $('#project').addClass('active');
// }
function aboutActive() {
    $('#home').removeClass('active');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#about').addClass('active');
    // nav
    $('#nav-home').removeClass('active-nav');
    $('#nav-contact').removeClass('active-nav');
    $('#nav-about').addClass('active-nav');
    // arrow
    $('#up-arrow').addClass('active-arrow');
    $('#down-arrow').addClass('active-arrow');
}
function contactActive() {
    $('#home').removeClass('active');
    $('#about').removeClass('active');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').addClass('active');
    // nav  
    $('#nav-home').removeClass('active-nav');
    $('#nav-about').removeClass('active-nav');
    $('#nav-contact').addClass('active-nav');
    // arrow    
    $('#up-arrow').addClass('active-arrow');
    $('#down-arrow').removeClass('active-arrow');

}

// $(document).ready(function(){
//     console.log("scro");

//     // $(window).scroll(function () {
//     //     var scroll = $(window).scrollTop();
//     //     console.log(scroll);
//     // });
// });

