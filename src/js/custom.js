$(document).ready(function($) {

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

});

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