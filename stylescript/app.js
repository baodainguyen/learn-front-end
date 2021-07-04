$(function(){
    let isEnd = false, startX = 0, scrollLeft, timeSpeed = 0, isLong = false;
    var $slider = $('.dnb-slider'), ignore = 'dnb-link';
    $slider.on('mousemove', function(e) {
    if(!isEnd) return;
    if(!isLong) {
        timeSpeed = new Date().getMilliseconds() - timeSpeed;
        if(timeSpeed > 200) isLong = true;
    };  
    if(isLong)
        $(this).scrollLeft(scrollLeft + startX - e.pageX);
    });
    $slider.on('mouseup mouseleave', function(e) {  
    timeSpeed = new Date().getMilliseconds() - timeSpeed;
    scrollLeft = (startX - e.pageX) * 2;  
    if((timeSpeed > 0 && timeSpeed < 200) && scrollLeft != 0) {
        $(this).stop().animate(
        {scrollLeft: $(this).scrollLeft() + scrollLeft}, 
        (2 * timeSpeed), 'linear', function() { 
            // Done animate swing/linear
        });
    };
    isEnd = false;
    });
    $slider.on('mousedown', function(e) {
    if($(e.target).hasClass(ignore)) return;
    isEnd = true;
    startX = e.pageX;
    scrollLeft = $(this).scrollLeft();
    timeSpeed = new Date().getMilliseconds();
    });
});