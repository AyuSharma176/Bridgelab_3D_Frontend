// Q8 - Dynamic Blog Posts
$(function(){
  const $wrap = $('<div class="card"><div id="posts"></div><div style="margin-top:8px;"><button id="addPost">Add New Post</button> <button id="prependFeatured">Prepend Featured Post</button> <button id="removeLast">Remove Last Post</button></div></div>');
  $('body').append($wrap);

  function makePost(title, content){
    return $(`<div class="post"><h4>${title}</h4><p>${content}</p><div class="tags"></div></div>`);
  }

  // initial posts
  $('#posts').append(makePost("Welcome","This is our first post"));
  $('#posts').append(makePost("Tips","Useful tips for new users"));
  $('#posts').append(makePost("Release","New features out now"));

  // 1) Add New Post -> append
  $('#addPost').on('click', function(){
    $('#posts').append(makePost("Post "+Math.floor(Math.random()*1000),"Auto generated content"));
  });

  // 2) Prepend Featured Post -> add at top
  $('#prependFeatured').on('click', function(){
    $('#posts').prepend(makePost("Featured: Highlights","This is a featured post"));
  });

  // 3) Remove Last Post -> delete last element
  $('#removeLast').on('click', function(){
    $('#posts .post').last().remove();
  });

  // 4) Add tags to posts -> use .before()/.after() for placement
  // Add a tag before each post title
  $('#posts').on('click', '.post h4', function(){
    $(this).before('<div class="tag">NEW</div>');
  });

  // 5) Highlight posts with specific keywords dynamically
  $('#posts').on('click', '.post', function(){
    const txt = $(this).text().toLowerCase();
    if(txt.indexOf('featured') !== -1 || txt.indexOf('release') !== -1){
      $(this).css('background','#fff3e0');
    }
  });
});
