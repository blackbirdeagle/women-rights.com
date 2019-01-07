var myMap;

ymaps.ready(function(){
    myMap = new ymaps.Map("map", {
        center: [55.778021, 37.570876],
        zoom: 16
    });

	
	var placemark = new ymaps.Placemark([55.778021, 37.570876],
		{
			balloonContent: 'Скаковая улица, 32с2'
		},
		{}
	);


    myMap.geoObjects.add(placemark);
    myMap.events.add('actiontick');
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$('.fancybox').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	helpers : {
		media : {},
		overlay: { 
			locked: false 
		}
	}
});

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		left = left - 38;
		$('.popup.'+target).css('top', top).css('left', left);
	})
	
	
	return false;
});

$('.overlay, .close1').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){

		var popup = $('.popup:visible');
		popup.fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});				
			
	}
}

addEventListener("keydown", keyExit);

$(function () {
	$(window).scroll(function () {
		if($(window).width() > 991){
			if ($(this).scrollTop() > 101) {
				$('.header').addClass("header__float");
			} else {
				$('.header').removeClass("header__float");
			}
		}
	});
});

$(document).ready(function(){
    $("#slider__diplom").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:3
			},
			991:{
				items:4
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });
	
    $("#slider__video").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	
	
    $("#slider__price").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:3
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	

    $("#slider__news").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	

    $("#slider__practic").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });		
	
    $("#slider__advokat").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	
});