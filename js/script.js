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