// Q4 - Special Offer Banner
$(function(){
  const banners = [
    "50% off on first order",
    "Buy 1 Get 1 Free - Weekend",
    "Free shipping over ₹999",
    "Student discount: 20% off",
    "Limited time: Extra 10% coupon"
  ];

  const $wrap = $('<div id="banners" class="card"></div>');
  banners.forEach((b,i)=>{
    $wrap.append(`<div class="banner" data-index="${i}"><strong>${b}</strong></div>`);
  });
  const $controls = $('<div style="margin-top:8px;"><button id="hideB">Hide</button> <button id="showB">Show</button> <button id="slideToggle">Slide Up/Down</button> <button id="fadeToggle">Fade In/Out</button></div>');
  $('body').append($wrap,$controls);

  // 1) Hide specific banners -> hides first one as example
  $('#hideB').on('click', function(){ $('#banners .banner').first().hide(); });

  // 2) Show hidden banners
  $('#showB').on('click', function(){ $('#banners .banner:hidden').show(); });

  // 3) Slide Up/Down toggle
  $('#slideToggle').on('click', function(){ $('#banners .banner').slideToggle(); });

  // 4) Fade In/Fade Out
  $('#fadeToggle').on('click', function(){ $('#banners .banner').fadeToggle(); });

  // 5) Automatically rotate banners every 5 seconds using fade
  let idx = 0;
  const $all = $('#banners .banner');
  $all.hide();
  $all.eq(idx).show();
  setInterval(function(){
    $all.eq(idx).fadeOut(600, function(){
      idx = (idx+1) % $all.length;
      $all.eq(idx).fadeIn(600);
    });
  }, 5000);
});
