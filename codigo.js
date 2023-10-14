
document.addEventListener("DOMContentLoaded", function () 
 {
    var menuToggle = document.getElementById("check");
    var menuLinks = document.querySelectorAll(".link_container a");

    menuLinks.forEach(function (link) 
    {
        link.addEventListener("click", function () 
        {
            menuToggle.checked = false; // Desmarca la casilla de verificación al hacer clic en un enlace
        });
    });
});
 















        
