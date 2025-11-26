// Q5 - Team Members Directory
$(function(){
  // Simple org chart
  const org = [
    {id:1, name:"Alice (Manager)", dept:"Sales", manager:null},
    {id:2, name:"Bob", dept:"Sales", manager:1},
    {id:3, name:"Carol", dept:"Sales", manager:1},
    {id:4, name:"Dave (Manager)", dept:"Engineering", manager:null},
    {id:5, name:"Eve", dept:"Engineering", manager:4},
    {id:6, name:"Frank", dept:"Engineering", manager:4}
  ];

  const $wrap = $('<div class="card" id="team"></div>');
  // group by departments
  const depts = {};
  org.forEach(p => {
    depts[p.dept] = depts[p.dept] || [];
    depts[p.dept].push(p);
  });
  Object.keys(depts).forEach(d=>{
    const $dept = $(`<div class="dept"><h3 class="deptBtn">${d}</h3><div class="members"></div></div>`);
    depts[d].forEach(m=>{
      const $m = $(`<div class="member" data-id="${m.id}" data-manager="${m.manager || ''}" data-dept="${m.dept}">${m.name}<div class="contact hidden">Contact: ${m.name.toLowerCase().split(' ')[0]}@example.com</div></div>`);
      $dept.find('.members').append($m);
    });
    $wrap.append($dept);
  });
  $('body').append($wrap, '<div style="margin-top:8px;"><button id="randomEmp">Select Random Employee</button> <button id="collapseTeam">Collapse/Expand Teams</button></div>');

  // 1) Click a manager -> highlight all direct reports.
  $('#team').on('click', '.member', function(){
    const mgrId = $(this).data('id');
    // If this member is a manager (has direct reports)
    const reports = $(`.member[data-manager="${mgrId}"]`);
    if(reports.length){
      $('.member').removeClass('highlight');
      reports.addClass('highlight');
    } else {
      // If not manager just toggle self
      $(this).toggleClass('highlight');
    }
  });

  // 2) Hover on an employee -> show contact info using .next() (here contact is a child)
  $('#team').on('mouseenter', '.member', function(){
    $(this).find('.contact').show();
  }).on('mouseleave', '.member', function(){
    $(this).find('.contact').hide();
  });

  // 3) Click on a department -> change background of all members in that department using .children()
  $('#team').on('click', '.deptBtn', function(){
    const $members = $(this).siblings('.members').children('.member');
    $members.css('background','#f0f8ff');
    setTimeout(()=> $members.css('background',''), 1500);
  });

  // 4) Select random employee -> highlight sibling employees.
  $('#randomEmp').on('click', function(){
    const $all = $('.member');
    const idx = Math.floor(Math.random()*$all.length);
    const $chosen = $all.eq(idx);
    $chosen.addClass('highlight');
    // siblings
    $chosen.siblings('.member').addClass('highlight');
    setTimeout(()=> $('.member').removeClass('highlight'), 2000);
  });

  // 5) Collapse/expand team using .parent() and .find()
  $('#collapseTeam').on('click', function(){
    $('#team .members').each(function(){
      $(this).toggle(); // simple toggle for collapse/expand
    });
  });
});
