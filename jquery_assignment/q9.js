// Q9 - Multi-JQuery Widgets
// Using multiple jQuery versions via noConflict
// jQuery 1 -> will be assigned to jq1
// jQuery 3 -> will be assigned to jq3

var jq1 = jQuery.noConflict(true); // releases first loaded jQuery (1.12) and returns it
// At this point, the second jQuery (3.6) is assigned to window.jQuery and window.$
var jq3 = jQuery.noConflict(true); // now returns the 3.6 instance

// If you want to keep them available globally, assign names:
window.jq1 = jq1;
window.jq3 = jq3;

// 1) Version 1 handles carousel slider rotation
jq1(function(){
  var $c = jq1('#carousel');
  var frames = ['Slide A','Slide B','Slide C'];
  var idx = 0;
  $c.text(frames[idx]);
  setInterval(function(){
    idx = (idx+1) % frames.length;
    $c.fadeOut(300, function(){ $c.text(frames[idx]).fadeIn(300); });
  }, 2000);
});

// 2) Version 2 manages modal popups for notifications.
jq3(function(){
  var $m = jq3('#modal');
  $m.on('click', function(){
    alert('Modal (using jQuery 3) simulated alert');
  });
});

// 3) Version 1 highlights active widget
jq1(function(){
  jq1('#widgets').on('click', function(){
    jq1(this).toggleClass('active');
  });
});

// 4) Version 2 attaches tooltips on hover
jq3(function(){
  jq3('#tooltips').hover(function(e){
    var t = jq3('<div class="tip">Tooltip text</div>').css({position:'absolute',top:e.pageY+5,left:e.pageX+5,background:'#fff',border:'1px solid #ddd',padding:'6px'}).appendTo('body');
    jq3(this).data('tip', t);
  }, function(){ var t = jq3(this).data('tip'); if(t) t.remove(); });
});

// 5) Use jQuery.noConflict() -> already used above to prevent collisions between versions
