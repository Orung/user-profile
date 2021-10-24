const toggle = document.querySelector('#toggle-bar');
const sidebarToggle = document.querySelector('.sidebarToggle');
const expandContent = document.querySelector('.main-section');
const dropDown = document.querySelector('.dropdown-nav'); 
const dropDownCheck = document.querySelector('.dropdown-check');

toggle.addEventListener('click',  () =>{
    sidebarToggle.classList.toggle('d-none')
    expandContent.classList.toggle('expand-content')
})
dropDownCheck.addEventListener('click', function() {
    if(dropDown.style.display == 'none') {
        dropDown.style.display = 'block';
        this.lastElementChild.style.transform =  "rotate(-180deg)";
        setTimeout(_=> dropDown.style.transform = 'translateY(4%)', 100);
    }
    else {
        this.lastElementChild.style.transform =  "rotate(0deg)";
        dropDown.style.transform = 'translateY(-150%)';
        setTimeout(_=> dropDown.style.display = 'none', 800);
    }
})
function mobileMenu(){
    if(window.innerWidth <= 900){
        sidebarToggle.classList.add('d-none');
        expandContent.classList.toggle('expand-content')
    }
}
mobileMenu()

const tag = name => document.querySelector(name);

//  toggle sidear dropdown
const sidebarToggler = tag(".toggle-sidebar"),
dropdownItems = tag(".dropdown-items");

sidebarToggler.addEventListener("click", toggleDropDown);

function toggleDropDown (){
    if(dropdownItems.style.display === "none") {
        this.lastElementChild.style.transform =  "rotate(0deg)";
        dropdownItems.style.display = "block";
    }
    else { 
        dropdownItems.style.display = "none";
        this.lastElementChild.style.transform =  "rotate(180deg)";
    }
}
