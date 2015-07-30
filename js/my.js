

        $(document).ready(function () {
            var isMenuOpen = false;

            $('.menu_btn').click(function () {
                if (isMenuOpen == false) {
                    $("#menu_smartphone").clearQueue().animate({
                        left: '0px'
                    });
                    $("#grey_back").fadeIn('fast');
                    $(this).fadeOut(200);
                    $(".close").fadeIn(300);
				    
                   
                    isMenuOpen = true;
                }
            });
            $('#grey_back').click(function () {
                if (isMenuOpen == true) {
                    $("#menu_smartphone").clearQueue().animate({
                        left: '-80%'
                    });
                    $("#page").clearQueue().animate({
                        "margin-left": '0px'
                    });
                    $("#grey_back").fadeOut('fast');
                    $(this).fadeOut(200);
                    $(".menu_btn").fadeIn(300);
                    
					
                    isMenuOpen = false;
                }
            });
        });
    
