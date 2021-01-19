const openCart = document.querySelector('.open-cart');
const closeCart = document.querySelector('.close-cart');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

openCart.addEventListener('click', function(){
	sidebar.style.display = 'flex';
	overlay.style.display = 'flex';
})

closeCart.addEventListener('click', function(){
	sidebar.style.display = 'none';
	overlay.style.display = 'none';
})

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu-page');

openMenu.addEventListener('click', function(){
	menu.style.display = 'flex';
})

closeMenu.addEventListener('click', function(){
	menu.style.display = 'none';
})

$(function() {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.quantity-num');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.quantity-num');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

$(function() {
  (function quantityProducts() {
    var $quantityArrowMinusSide = $(".sidebar__quantity-arrow-minus");
    var $quantityArrowPlusSide = $(".sidebar__quantity-arrow-plus");

    $quantityArrowMinusSide.click(quantityMinus);
    $quantityArrowPlusSide.click(quantityPlus);

    function quantityMinus() {
      var $quantityNumSide = $(this).siblings('.sidebar__quantity-num');
      if ($quantityNumSide.val() > 1) {
        $quantityNumSide.val(+$quantityNumSide.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNumSide = $(this).siblings('.sidebar__quantity-num');
      $quantityNumSide.val(+$quantityNumSide.val() + 1);
    }
  })();
});
$(function() {
  (function quantityProducts() {
    var $quantityArrowMinusProduct = $(".features__quantity-arrow-minus");
    var $quantityArrowPlusProduct = $(".features__quantity-arrow-plus");

    $quantityArrowMinusProduct.click(quantityMinus);
    $quantityArrowPlusProduct.click(quantityPlus);

    function quantityMinus() {
      var $quantityNumProduct = $(this).siblings('.features__quantity-num');
      if ($quantityNumProduct.val() > 1) {
        $quantityNumProduct.val(+$quantityNumProduct.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNumProduct = $(this).siblings('.features__quantity-num');
      $quantityNumProduct.val(+$quantityNumProduct.val() + 1);
    }
  })();
});