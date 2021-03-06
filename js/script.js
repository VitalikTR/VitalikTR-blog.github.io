$('#nav').onePageNav({
    currentClass:"current",
    scrollSpeed: 700,
    scrollThreshold: 0.5, 
    scrollOffset: $('header').height() - 1,   
});

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");

    mobileMenu.addEventListener("click", function() {
        mobileMenu.classList.toggle("active-menu");
        if(mobileMenu.classList.contains("active-menu")){
            mainMenu.classList.add("active-menu")
        } else {
            mainMenu.classList.remove("active-menu")
        }
    });

    let sendMessage = document.querySelectorAll(".btn-send-message");
    // console.log(sendMessage);
    let modal = document.querySelector(".modal-send-message")
    // console.log(modal);
    let animationModal = document.querySelector(".modal-content")
    
    sendMessage.forEach(function(btn){
        btn.addEventListener("click", function(){
            modal.classList.add("show")
                modal.classList.remove("hide")
                    animationModal.classList.add("show-animate-modal")
        })
    })

    function openModal() {
        modal.classList.add("show")
            modal.classList.remove("hide")
                animationModal.classList.add("show-animate-modal")
    }

    function closeModal() {
        modal.classList.add("hide")
            modal.classList.remove("show")
                    animationModal.classList.remove("show-animate-modal")
    }
 
    // modal.addEventListener("click",closeModal);
    modal.addEventListener("click", function(e){
        if (e.target === modal) {
            closeModal()
    }
})


// $(document).ready(function(){
//     $('a[href^="#"]').click( function(){ // если в href начинается с # , то ловим клик
//     // проверим существование элемента чтобы избежать ошибки
//     var scroll = $(this).attr('href');
//     if ($(scroll).length != 0) {
//     $('html, body').animate({ scrollTop: ($(scroll).offset().top - 80) }, 700); // анимируем скроолинг к элементу scroll
//     }
//     return false; // выключаем стандартное действие
//     });
//     });


