// Q6 - Event Subscription Panel
$(function(){
  const topics = ["News", "Promotions", "Updates", "Workshops", "Events"];
  const $panel = $('<div class="card" id="subs"></div>');
  $panel.append('<h3>Topics</h3>');
  topics.forEach(t => {
    $panel.append(`<div class="topic" data-topic="${t}">${t} <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>`);
  });
  $panel.append('<div id="messages"></div><div style="margin-top:8px;"><button id="addTopic">Add Topic</button></div>');
  $('body').append($panel);

  // 1) Subscribe -> enable notifications (simulate)
  $('#subs').on('click', '.subscribe', function(){
    const topic = $(this).closest('.topic').data('topic');
    $('#messages').text("Subscribed to " + topic).show().fadeOut(2000);
  });

  // 2) Unsubscribe -> disable notifications
  $('#subs').on('click', '.unsubscribe', function(){
    const topic = $(this).closest('.topic').data('topic');
    $('#messages').text("Unsubscribed from " + topic).show().fadeOut(2000);
  });

  // 3) Dynamically add new subscription topics -> attach .on() click events (delegated)
  $('#addTopic').on('click', function(){
    const newTopic = "Topic" + Math.floor(Math.random()*100);
    $('#subs').append(`<div class="topic" data-topic="${newTopic}">${newTopic} <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>`);
  });

  // 4) Remove specific subscription -> detach .off() event (example: remove handlers for one topic)
  // We'll provide a button to remove handlers from the first topic
  $('#subs').append('<div style="margin-top:8px;"><button id="detachFirst">Detach Events from First Topic</button></div>');
  $('#detachFirst').on('click', function(){
    const $first = $('#subs .topic').first();
    // remove click handlers for subscribe/unsubscribe on the first topic only (demonstration)
    $first.find('.subscribe, .unsubscribe').off('click');
    $('#messages').text('Detached events from first topic').show().fadeOut(2000);
  });

  // 5) Show success message -> dynamically inserted into DOM on action (done above using #messages)
});
