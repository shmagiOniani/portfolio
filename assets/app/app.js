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
    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#home').addClass('active');
    }
}

function moveDown () {
    if($('#home').hasClass('active')){
        $('#home').removeClass('active');
        $('#about').addClass('active');
    }else if($('#about').hasClass('active')){
        $('#about').removeClass('active');
        $('#contact').addClass('active');
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
    $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#home').addClass('active');
}
function projectsActive() {
    $('#home').removeClass('active');
    $('#about').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#project').addClass('active');
}
function aboutActive() {
    $('#home').removeClass('active');
    $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').removeClass('active');
    $('#about').addClass('active');
}
function contactActive() {
    $('#home').removeClass('active');
    $('#about').removeClass('active');
    $('#projects').removeClass('active');
    $('#more-me').removeClass('active');
    $('#contact').addClass('active');
}

// $(document).ready(function(){
//     console.log("scro");

//     // $(window).scroll(function () {
//     //     var scroll = $(window).scrollTop();
//     //     console.log(scroll);
//     // });
// });

