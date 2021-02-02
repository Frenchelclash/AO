/*homepage*/

//слайдер на домашней странице
new Swiper('.recommend-section', {
  slidesPerView: 'auto',
   loop: true,
   simulateTouch: true,
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
      spaceBetween: 30,
      slidesPerView: 'auto',
      },
   },

})

/*sidebar*/

//анимация сайдбара

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


//открытие сайдбара 

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

//закрытие сайдбара 

function popupClose(popupActive, doUnlock = true) {
  if(unlock) {
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnlock();
    }
  }
}

//блок скролла

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

//кнопки плюс и минус в добавлении количества товаров (сайдбар)

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
//открытие меню в мобильной версии 

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
//открытие меню 

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

//закрытие меню 

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

//слайдер с фотографиями в карточке товара 

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

//кнопки плюс и минсу в добавлении количества товаров (карточка товара)

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






