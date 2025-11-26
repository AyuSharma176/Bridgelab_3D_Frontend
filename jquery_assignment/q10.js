// Q10 - Registration Form Validation
$(function(){
  const existingEmails = ["test@example.com","user1@example.com","hello@domain.com"];

  const $form = $(`
    <form id="regForm" class="card">
      <label>Name: <input id="name" name="name" /></label><br/><br/>
      <label>Email: <input id="email" name="email" /></label><br/><br/>
      <label>Password: <input id="password" type="password" name="password" /></label><br/><br/>
      <button type="submit">Register</button>
      <div id="result" style="margin-top:8px;"></div>
    </form>
  `);
  $('body').append($form);

  // Helper email regex
  function validEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  $('#regForm').on('submit', function(ev){
    ev.preventDefault();
    let valid = true;
    $('#name,#email,#password').removeClass('invalid');

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pwd = $('#password').val();

    // 1) Name not empty
    if(!name){
      $('#name').addClass('invalid');
      valid = false;
    }
    // 2) Email format and uniqueness
    if(!validEmail(email) || existingEmails.indexOf(email.toLowerCase()) !== -1){
      $('#email').addClass('invalid');
      valid = false;
    }

    // 3) Password min 8 chars
    if(!pwd || pwd.length < 8){
      $('#password').addClass('invalid');
      valid = false;
    }

    if(valid){
      // 4) Show success message
      $('#result').text('Registration successful!').css('color','green');
    } else {
      // 5) Highlight invalid fields dynamically with red border using .css() (we used class .invalid)
      $('#result').text('Please correct the highlighted fields.').css('color','red');
    }
  });

  // Live validation example: highlight invalid as user types
  $('#email').on('blur', function(){
    const e = $(this).val().trim();
    if(!validEmail(e) || existingEmails.indexOf(e.toLowerCase()) !== -1){
      $(this).addClass('invalid');
    } else $(this).removeClass('invalid');
  });
});
