function openSlideMenu() {
    document.getElementById ('side-menu').style.width = '250px';
    document.getElementById ('main').style.marginLeft = '250px';
}


function closeSlideMenu() {
    document.getElementById ('side-menu').style.width = '0';
    document.getElementById ('main').style.marginLeft = '0';
}

const nav_button = document.getElementById('menu_button');
const sec_nav = document.getElementById('secondary_nav');
const close = document.getElementById('close_button');

nav_button.addEventListener('click', function(){
  console.log('working');
  sec_nav.classList.remove('hidden');
});

close.addEventListener('click', function(){
  sec_nav.classList.add('hidden');
})