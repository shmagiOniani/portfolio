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
        $('#nav-contact').removeClass('active-nav');
        $('#about').addClass('active');
        $('#nav-about').addClass('active-nav');
    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#nav-about').removeClass('active-nav');
        $('#home').addClass('active');
        $('#nav-home').addClass('active-nav');
    }
}

function moveDown () {
    if($('#home').hasClass('active')){
        $('#home').removeClass('active');
        $('#nav-home').removeClass('active-nav');
        $('#about').addClass('active');
        $('#nav-about').addClass('active-nav');
    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#nav-about').removeClass('active-nav');
        $('#contact').addClass('active');
        $('#nav-contact').addClass('active-nav');
    }
}

function aboutMeIn() {
    $('#about').removeClass('active');
    $('#more-me').addClass('active');
}

function aboutMeOut() {
    $('#more-me').removeClass('active');
    $('#about').addClass('active');
}

function homeActive() {
    $('#about').removeClass('active');
    $('#nav-about').removeClass('active-nav');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#nav-contact').removeClass('active-nav');
    $('#home').addClass('active');
    $('#nav-home').addClass('active-nav');
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
    $('#nav-home').removeClass('active-nav');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#nav-contact').removeClass('active-nav');
    $('#about').addClass('active');
    $('#nav-about').addClass('active-nav');
}
function contactActive() {
    $('#home').removeClass('active');
    $('#nav-home').removeClass('active-nav');
    $('#about').removeClass('active');
    $('#nav-about').removeClass('active-nav');
    // $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').addClass('active');
    $('#nav-contact').addClass('active-nav');
}

// $(document).ready(function(){
//     console.log("scro");

//     // $(window).scroll(function () {
//     //     var scroll = $(window).scrollTop();
//     //     console.log(scroll);
//     // });
// });

