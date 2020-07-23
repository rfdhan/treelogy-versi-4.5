var loginTab = document.querySelector('.login-tab');
var singinBx = document.querySelector('.singinBx');
var closePromo = document.querySelector('.close')

loginTab.addEventListener('click', function(){
singinBx.classList.add('singin-active');
});
closePromo.addEventListener('click', function(){
singinBx.classList.remove('singin-active');
});

// filter
var filterBtn = document.querySelector('.filter-btn')
var filterBy = document.querySelector('.filter-by')
$(document).ready(function(){
    $(".filter-btn").click(function(){
        $(".filter-by").toggleClass("main");
    });
});

// navbar
// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 80) {
//     $('.navbar').css('background','#fff');
//     $('.navbar a , .navbar button').css('color','#2d3436');
//     } else {
//     $('.navbar').css('background','transparent');
//     $('.navbar a, .navbar button').css('color','#fff');
//     }
// });


// popup phone
var toMesjid = document.querySelector('.toa-mesjid');
var pictPromoMobile = document.querySelector('.pictpromomobile');
var closePromo = document.querySelector('.closepromo')

toMesjid.addEventListener('click', function(){
pictPromoMobile.classList.add('pictmobile');
});
closePromo.addEventListener('click', function(){
pictPromoMobile.classList.remove('pictmobile');
});


// menu phone
var mobileChange = document.querySelector('.mobile-change')
var menuChange = document.querySelector('.menu-change')
$(document).ready(function(){
    $(".mobile-change").click(function(){
        $(".menu-change").toggleClass("change");
    });
});
