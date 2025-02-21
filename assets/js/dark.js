document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");
    let logoMobile = document.querySelector(".navbar__link-logo");
    let logo = document.querySelector(".navbar__logo-light");

    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark";

        let themeDark = document.querySelector("#theme-dark");
        if(themeDark){
            head.removeChild(themeDark);
            light.style.display = "block";
            dark.style.display = "none";

            logo.src = "assets/img/logo1.png";
            logoMobile.src = "assets/img/logo1.png";

        }else{
            head.appendChild(link);
            light.style.display = "none";
            dark.style.display = "block";

            logo.src = "assets/img/logo2.png";
            logoMobile.src = "assets/img/logo2.png"

        }
    });
})