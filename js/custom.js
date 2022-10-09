$(document).ready(function($) {

    // запуск wow анимаций \|/ 
    
    new WOW().init();
    
    //отложенные анимации \|/
    
    let options = {threshold: [0.5]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');
        elements.each((i,el) => {
            observer.observe(el);    
        });
    
    function onEntry (entry){
        entry.forEach(change => {
            if (change.isIntersecting){
                change.target.classList.add('show-animation');
                change.target.src = change.target.dataset.src;
            }
            
        });
        
    }
    
    //подсветка кнопок навигации \|/ 
    
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $('.section').each((i,el) => {
        
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance){
            $('nav a').each((i, el) => {
                if ($(el).hasClass('active')){
                    $(el).removeClass('active');
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});   

// AJAX форма для пользователя \|/
  
$('form').submit(function(event){
   event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
});

    
// маска для телефона и обязательный ввод  \|/


$("#inputTel3").mask("+7(999) 999-9999"); 
    


$('form').submit(function(event){
    
    if ($("inputTel3").val() == "" || $("#inputEmail3").val() == ""){
        event.preventDefault();
        alert("Введите ваши данные");
    }

});
    
});


// счётчик статистики \|/
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 70 + "px"})
});

function scroll(val,el,timeout,step){
var i=0;
(function(){
if(i<=val){
setTimeout(arguments.callee,timeout);
document.getElementById(el).innerHTML=i;
i=i+step;
}else{
document.getElementById(el).innerHTML=val;
}
})();
}
scroll(231,'digit-counter',60,1);
scroll(326,'digit-counter1',60,1);
scroll(151,'digit-counter2',60,1);
scroll(111,'digit-counter3',60,1);

