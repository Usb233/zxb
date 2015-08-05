

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
    
        function a() {
			document.getElementsByTagName("h2")[0]. innerHTML="待完成项目";
		}
		
		//a game
		function game() {
            alert("你也是挺无聊的😂");
		    alert("是不是有种熟悉的感脚😄");
			alert("233333");
			alert("你太天真了");
			alert("把浏览器关了吧→_→");
			alert("←_←");
			alert("→_→");
			alert("还没够么");
			alert("hehe");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			alert("→_→");
			alert("←_←");
			}
		
