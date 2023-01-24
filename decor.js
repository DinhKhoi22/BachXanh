var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = '300px'
    }
    else{
        header.style.height = null
    }
}


var menuItems = document.querySelectorAll('#navbar li a[href*="#"]');
for (var i = 0; i<menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(){
        header.style.height = null
    }
}

