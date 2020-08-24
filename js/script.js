$('#nav').onePageNav({
    currentClass:"current",
    scrollSpeed: 700,
    scrollThreshold: 0.5, 
    scrollOffset: $('header').height() -1,   
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


