// Q3 - Interactive FAQ
$(function(){
  const faqs = [
    {q:"How do I reset my password?", a:"Click 'Forgot password' on the login page and follow instructions."},
    {q:"What is the refund policy?", a:"You can request refund within 30 days of purchase."},
    {q:"Do you provide student discounts?", a:"Yes, we offer special pricing for verified students."},
    {q:"How to contact support?", a:"Email support@example.com or use the chat widget."},
    {q:"Can I upgrade my plan later?", a:"Yes, you can upgrade anytime from account settings."}
  ];

  const $list = $('<div class="card" id="faqList"></div>');
  faqs.forEach((f,i)=>{
    const $item = $(`
      <div class="faq-item" tabindex="0">
        <h3 class="question">${f.q}</h3>
        <div class="answer hidden">
          <p>${f.a}</p>
          <input class="ansInput" placeholder="Add a note..." />
        </div>
      </div>
    `);
    $list.append($item);
  });

  $('body').append($list);

  // 1) Click on a question -> toggle answer visibility.
  $('#faqList').on('click', '.question', function(){
    $(this).next('.answer').toggle();
  });

  // 2) Hover -> change question color.
  $('#faqList').on('mouseenter', '.question', function(){
    $(this).css('color','teal');
  }).on('mouseleave', '.question', function(){
    $(this).css('color','');
  });

  // 3) Double-click question -> collapse all answers.
  $('#faqList').on('dblclick', '.question', function(){
    $('#faqList .answer').slideUp();
  });

  // 4) Focus on answer input -> highlight parent question.
  $('#faqList').on('focus', '.ansInput', function(){
    $(this).closest('.faq-item').find('.question').css('background','#ffffe0');
  });

  // 5) Blur from input -> reset background color.
  $('#faqList').on('blur', '.ansInput', function(){
    $(this).closest('.faq-item').find('.question').css('background','');
  });
});
