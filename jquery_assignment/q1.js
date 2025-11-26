// Q1 - Welcome Page Greeting
// On page load show greeting by time, change to motivational quote, toggle visibility, and alert on click.

$(function() {
  // Determine time-based greeting
  function getGreeting() {
    const hrs = new Date().getHours();
    if (hrs < 12) return "Good Morning!";
    if (hrs < 18) return "Good Afternoon!";
    return "Good Evening!";
  }

  // Create DOM elements
  const $greet = $('<div class="card" id="greeting" tabindex="0"></div>');
  const $changeBtn = $('<button id="changeGreeting">Change Greeting</button>');
  const $toggleBtn = $('<button id="toggleWelcome">Toggle Welcome Message</button>');
  const $welcome = $('<p id="welcomeMsg">Welcome to our site — enjoy your stay!</p>');

  $('body').append($greet, $changeBtn, $toggleBtn, $welcome);

  // 1) On load -> display personalized greeting
  $greet.text(getGreeting());

  // 2) Change Greeting -> motivational quote
  $('#changeGreeting').on('click', function() {
    $('#greeting').text("Keep going — small steps every day lead to big results.");
  });

  // 3) Toggle visibility of welcome message
  $('#toggleWelcome').on('click', function() {
    $('#welcomeMsg').toggle();
  });

  // 4) Show alert when greeting is clicked
  // Using delegated handler (flexible if element replaced)
  $('body').on('click', '#greeting', function() {
    alert("You clicked the greeting — have a wonderful day!");
  });

  // accessibility: pressing Enter on greeting triggers click
  $('#greeting').on('keypress', function(e) {
    if (e.key === 'Enter') $(this).trigger('click');
  });
});
