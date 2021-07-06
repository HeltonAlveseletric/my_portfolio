$(function(){
    /*
    Portifolio Animation
    Name: Helton Alves de Azevedo
    Date: 06-21-2021
    Framework: Jequey 3.6.1 
    */

    //functions calls
   click_menu();
   init_slider();
   //animations
   //1 - Menu Mobile
    function click_menu(){
        $('.menu-mobile').click(function(){
            $(this).find('ul').slideToggle();
        });
    }
    //2 - Projects Slider
    //slider variables

    //initial value for the current index
    var curIndex = 0
    //Max index that can be reached by the aplication
    var maxIndex = Math.ceil($('.slider-img').length);
    //alterando o tamanho de um elemento
    $('.slider-wraper').css('width')
    function init_slider(){
        console.log('To funcionando');
    }
});