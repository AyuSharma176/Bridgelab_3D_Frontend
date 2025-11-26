// Q2 - Product Highlight
// Click to highlight, hover to show details, favorite toggle, discount styles, out-of-stock alert.

$(function() {
  // Build product list (at least 5)
  const products = [
    {id:1, name:"Blue Sneakers", price:59.99, discount:true, stock:10, details:"Lightweight running shoes"},
    {id:2, name:"Leather Wallet", price:29.5, discount:false, stock:0, details:"Genuine leather, 2 slots"},
    {id:3, name:"Sunglasses", price:19.99, discount:true, stock:5, details:"UV protection"},
    {id:4, name:"Backpack", price:49.99, discount:false, stock:2, details:"15L capacity"},
    {id:5, name:"Watch", price:89.99, discount:true, stock:0, details:"Water resistant"}
  ];

  const $container = $('<div class="card" id="products"></div>');
  products.forEach(p => {
    // data attributes for discount and stock
    const $prod = $(`
      <div class="product" data-id="${p.id}" data-discount="${p.discount}" data-stock="${p.stock}">
        <h4 class="pname">${p.name}</h4>
        <div class="price">₹${p.price}</div>
        <div class="pdetails hidden">${p.details}</div>
        <button class="fav">♡ Favorite</button>
      </div>`);
    if(p.discount) $prod.attr('data-discount','true');
    $container.append($prod);
  });

  $('body').append($container);

  // 1) Click on a product -> highlight background.
  $('#products').on('click', '.product', function(e) {
    // avoid clicking favorite button toggling highlight twice
    if($(e.target).is('.fav')) return;
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
    // 5) Show alert if out of stock
    const stock = parseInt($(this).data('stock'),10);
    if(stock === 0) alert($(this).find('.pname').text() + " is out of stock.");
  });

  // 2) Hover over a product -> show additional details.
  $('#products').on('mouseenter', '.product', function() {
    $(this).find('.pdetails').show();
  }).on('mouseleave', '.product', function() {
    $(this).find('.pdetails').hide();
  });

  // 3) Clicking "Favorite" icon -> toggles a "selected" class.
  $('#products').on('click', '.fav', function() {
    const $p = $(this).closest('.product');
    $p.toggleClass('selected');
    $(this).toggleClass('favorite selected');
    $(this).text($p.hasClass('selected') ? "♥ Favorited" : "♡ Favorite");
  });

  // 4) Apply different styles to products with discounts using attribute selector.
  // Add a small badge
  $('[data-discount="true"]').each(function(){
    $(this).prepend('<div class="badge">DISCOUNT</div>');
  });
});
