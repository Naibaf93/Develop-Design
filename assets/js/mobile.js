document.addEventListener("DOMContentLoaded", (e) =>{

    // Seleccionar mis dos elememtos principales
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu= document.querySelector(".menu-mobile");

    mobileBtn.addEventListener("click", () =>{
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobileMenu.classList.remove("menu-mobile--show")
        }else{
            mobileMenu.classList.add("menu-mobile--show")  
        }
    });
})