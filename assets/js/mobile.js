document.addEventListener("DOMContentLoaded", (e) =>{

    // Seleccionar mis elememtos principales
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu = document.querySelector(".menu-mobile");
    let btnClose = document.querySelector(".menu-mobile__close");

    // Funcion mostrar y ocultar menu
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobileMenu.classList.remove("menu-mobile--show")
        }else{
            mobileMenu.classList.add("menu-mobile--show")  
        }
    };
    
    // Al dar click al boton del menu mostrar el menu de navegacion responsive
    mobileBtn.addEventListener("click", showHiddenMenu);

    // Al redimensionar la pantalla ocultar el menu si es necesario
    window.addEventListener("resize", () => {
        let windowWidth = parseInt(document.body.clientWidth);

        if(windowWidth >= 1000){
            mobileMenu.classList.remove("menu-mobile--show");
        }
    });

    // Poder cerrar el menu con el boton X
    btnClose.addEventListener("click", showHiddenMenu);     
});