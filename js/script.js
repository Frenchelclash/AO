/*homepage*/
new Swiper('.recommend-section', {
   loop: true,
   simulateTouch: true,
   slidesPerView: 1.2,
  spaceBetween: 10,
   centeredSlides: true,

    keyboard: {
    enabled:true,
    pageUpPageDown: true,
    },
    mousewheel: {
    eventsTarget: '.recommend-section',
    },
   breakpoints: {
    415: {
      slidesPerView: 2.5,
      spaceBetween: 40
      },
   },

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

/*sidebar*/

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');

let unlock = true;

const timeout =500;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {

    const el = popupCloseIcon[index];
     el.addEventListener('click', function(e) {
    popupClose(el.closest('.popup'));
    e.preventDefault();
  });
 
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false)
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function(e){
      if(!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if(unlock) {
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
if( lockPadding.length > 0) {
   for (let index = 0; index < lockPaddingValue.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
}
  //body.style.paddingRight = lockPaddingValue;
  //body.classList.add('lock');

  unlock = false;
  setTimeout(function(){
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function() {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
  }
 // body.style.paddingRight = '0px';
  //body.classList.remove('lock');
}, timeout);

  unlock = false;
  setTimeout(function (){
    unlock = true;

  }, timeout);
}

document.addEventListener('keydown', function(e) {
  if(e.which === 27){
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

$(function() {
  (function quantityProducts() {
    var $quantityArrowMinusProduct = $(".sidebar__quantity-arrow-minus");
    var $quantityArrowPlusProduct = $(".sidebar__quantity-arrow-plus");

    $quantityArrowMinusProduct.click(quantityMinus);
    $quantityArrowPlusProduct.click(quantityPlus);

    function quantityMinus() {
      var $quantityNumProduct = $(this).siblings('.sidebar__quantity-num');
      if ($quantityNumProduct.val() > 1) {
        $quantityNumProduct.val(+$quantityNumProduct.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNumProduct = $(this).siblings('.sidebar__quantity-num');
      $quantityNumProduct.val(+$quantityNumProduct.val() + 1);
    }
  })();
});

/*menu-popup*/

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      menuPopupOpen(currentPopup);
      e.preventDefault();
    });
  }
}
  
  const popupCloseMenuIcon = document.querySelectorAll('.close-menu-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {

    const el = popupCloseMenuIcon[index];
     el.addEventListener('click', function(e) {
    menuPopupClose(el.closest('.menu-popup'));
    e.preventDefault();
  });
 
  }
}

function menuPopupOpen(currentMenuPopup) {
  if (currentMenuPopup && unlock) {
    const menuPopupActive = document.querySelector('.menu-popup.open');
    if (popupActive) {
      menuPopupClose(menuPopupActive, false)
    } else {
      bodyLock();
    }
    currentMenuPopup.classList.add('open');
    currentMenuPopup.addEventListener("click", function(e){
      if(!e.target.closest('.menu-popup__content')) {
        menuPopupClose(e.target.closest('.menu-popup'));
      }
    });
  }
}

function menuPopupClose(popupActive, doUnlock = true) {
  if(unlock) {
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
if( lockPadding.length > 0) {
   for (let index = 0; index < lockPaddingValue.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
}
  //body.style.paddingRight = lockPaddingValue;
  //body.classList.add('lock');

  unlock = false;
  setTimeout(function(){
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function() {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
  }
 // body.style.paddingRight = '0px';
  //body.classList.remove('lock');
}, timeout);

  unlock = false;
  setTimeout(function (){
    unlock = true;

  }, timeout);
}


document.addEventListener('keydown', function(e) {
  if(e.which === 27){
    const menuPopupActive = document.querySelector('.menu-popup.open');
    popupClose(popupActive);
  }
});
/*product*/
new Swiper('.image-slider', {
   loop: true,
   simulateTouch: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled:true,
    pageUpPageDown: true,
  },
  mousewheel:{
    eventsTarget: '.image-slider',
  }

}
  );

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






