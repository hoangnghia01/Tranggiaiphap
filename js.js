let bar_click = document.querySelector('.containerr header #bar')
bar_click.addEventListener("click", open_bar)
let open_menu = document.querySelector('.containerr .menu')
function open_bar(){
    open_menu.classList.toggle('active')
}