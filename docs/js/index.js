
$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        slidesToShow:3,
        slidesToScroll:1,
        dots:true,
        responsive: [{
			breakpoint: 480,settings: {//480px以下では1画像表示
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
    });
});

