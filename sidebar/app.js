let menubtn = document.querySelector('#checkIconMenu');
let xbtn = document.querySelector('#checkIconX');

menubtn.addEventListener("change", function() {
    if (menubtn.checked) {
        document.querySelector('.container').classList.add('active');
        document.querySelector(".iconX").classList.remove("display-none");
        document.querySelector(".iconMenu").classList.add("display-none");
        xbtn.checked = false;
    }
});

xbtn.addEventListener("change", function() {
    if (xbtn.checked) {
        document.querySelector('.container').classList.remove('active');
        document.querySelector(".iconMenu").classList.add("display-none");
        document.querySelector(".iconX").classList.add("display-none");
        document.querySelector(".iconMenu").classList.remove("display-none");
        menubtn.checked = false;
    }
});

