const btnMenu = document.querySelector('.navbar-icon');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu-mb')
btnMenu.addEventListener('click', 
    function Menu()
    {   
        overlay.classList.remove('hidden');
        menu.classList.remove('hidden');
    }
)

/* close */
const close = document.querySelector('.close');
close.addEventListener('click',
    function()
    {
        overlay.classList.add('hidden');
        menu.classList.add('hidden');
    }
)
/* overlay */
overlay.addEventListener('click', 
    function()
    {
        overlay.classList.add('hidden');
        menu.classList.add('hidden');
    }   
)