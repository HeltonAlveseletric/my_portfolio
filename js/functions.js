/*
    Portfolio Animation
    Name: Helton Alves de Azevedo
    Date: 06-21-2021
    Framework: Jequey 3.6.1 
    */
$(function(){
    // Gobal Variables
    var delay = 3000; // Transition time
    var curIndex = 0; // Current index
    var amt;          // Quantity of images


    //Functions calls
   click_menu(); // Mobile menu
   init_slider(); //Slider configuration
   autoplay(); // Playing Slider
   //animations
   
   
   /*1 - Menu Mobile - Resposive nevagtion menu for mobile gadgets*/
    function click_menu(){
        $('.menu-mobile').click(function(){ //Click event
            $(this).find('ul').slideToggle(); //Slide toggle animation
        });
    }

    /*2 - Projects Slider - This slider shows a few images about the project*/
    function init_slider(){ //slider configurations
        amt = $('.slider-img').length;
        console.log(amt);
       var wraperdim = 100*amt; //width of the slider-img-wraper
       var slideimg = 100/amt;  //width of slider-img single elemet
       $('.slider-img').css('width',slideimg+'%'); // Image width dynamicly
       $('.slider-img-wraper').css('width',wraperdim+'%'); // Wraper dynamicly
    }
    function autoplay(){ //slider autoplay
        /*Set interval function will make the image transition happens. The time was defined at delay variable (3 secs)*/
        setInterval(function(){ 
            curIndex++; //increment of curIndex variable
            if(curIndex == amt){
                /*If the value of curIndex is as equal as amt it will be define zero */
                curIndex = 0;
            }
            toslider(curIndex); //Calling the toslider function
        }
        ,delay);

    }
    function toslider(){
        //Getting slider-img offset
        var sliderimgoff = $('.slider-img').eq(curIndex).offset().left;
        //Getting slider-img-wraper offset
        var sliderwrpoff = $('.slider-img-wraper').offset().left;
        //Getting the offset for each slider-img element
        var offset = sliderimgoff-sliderwrpoff;
        //Defining  bullets style
        $('.nav-bullets span').css('background-color','#ccc');
        //Defining the current bullet style
        $('.nav-bullets span').eq(curIndex).css('background-color','#fded32');
        //Slider animation: scrolling left
        $('.scroll').stop().animate({'scrollLeft':offset});
    }
});