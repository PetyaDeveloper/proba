   // ***************** ANIMSITION
$(".animsition").animsition({
    inClass: 'flip-in-y',
    outClass: 'flip-out-y',
    inDuration: 1500,
    outDuration: 800,
});

             //***************  STICKY HEADER AND ELEMENTS
           // ******* HOME PAGE
  $(".header").sticky({
     topSpacing:0,
    
  });
$('.header').on('sticky-start',function(){
  $('.description').html('We build <strong>great </strong>apps.');
});
$('.header').on('sticky-end',function(){
  $('.description').html('We build apps.');
});

//challenge: in WORK HEADER: STICK H4, S WELL WITH ADDED EMAIL US
$('.addLink').sticky({
    topSpacing:64,
    getWidthFrom: '.container',
    responsiveWidth: true
});

$('.addLink').on('sticky-start',function(){
  $(this).append('<a href="mailto:pskpetya@gmail.com" class="email">  Email us</a>');
});
$('.addLink').on('sticky-end',function(){
    $('.email').remove();
})
// STICK IN TEAM H5: 'STICKY-HEADER' WITH ADDED EMAIL ADDRESS
$('.sticky-header').sticky({
    topSpacing: 54,
    getWidthFrom: '.container',
    responsiveView: true,
    center: true
});

