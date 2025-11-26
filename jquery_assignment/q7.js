// Q7 - Search Courses
$(function(){
  const courses = ["JavaScript Basics","Advanced CSS","React for Beginners","Node.js APIs","Data Structures","Algorithms 101","Python for Data","Machine Learning Intro","UX Design","Databases 101"];

  const $wrap = $('<div class="card"><input id="search" placeholder="Search courses..." /><button id="clear">Clear</button><div id="count"></div><ul id="list"></ul></div>');
  $('body').append($wrap);

  courses.forEach(c => $('#list').append(`<li class="course">${c}</li>`));

  // 1) Search input filters courses in real-time using .keyup()
  $('#search').on('keyup', function(){
    const q = $(this).val().trim().toLowerCase();
    let matchCount = 0;
    $('#list .course').each(function(){
      const txt = $(this).text();
      if(q && txt.toLowerCase().indexOf(q) === -1){
        $(this).hide();
      } else {
        $(this).show();
        // 2) Highlight matched text using .css()
        if(q){
          const regex = new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')', 'ig');
          const highlighted = txt.replace(regex, '<span class="match">$1</span>');
          $(this).html(highlighted);
        } else {
          $(this).text(txt);
        }
        matchCount++;
      }
    });
    // 4) Show count of matched courses dynamically.
    $('#count').text(matchCount + " match(es)");
  });

  // 5) Clear search -> reset list to show all courses.
  $('#clear').on('click', function(){
    $('#search').val('');
    $('#list .course').show().each(function(){ $(this).text($(this).text()); });
    $('#count').text('');
  });
});
