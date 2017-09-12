$(document).ready(function () {
 
    var menu_bar = $("#navigation_wrap");
    var contents = $("#content_wrap");
    var header_wrap = $("header");
    
    var reset_menu = function () {
        menu_bar.removeClass("on");
        contents.removeClass("on"); 
        header_wrap.removeClass("on"); 
    };
    
    //모바일 메뉴 - 토글
    menu_toggle = function () {
        menu_bar.toggleClass("on"); //메뉴
        contents.toggleClass("on"); //본문
        header_wrap.toggleClass("on"); // 상단메뉴
    };
    
    //창크기 변할때마다 메뉴초기화
    $(window).resize(function () {
        reset_menu();
    });
    
    //본문클릭시 메뉴초기화
    contents.click(function () {
        reset_menu();
    });
            
    
   
    
});