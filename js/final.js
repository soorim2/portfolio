$(document).ready(function(){

/*home*/

// ipad_file move
	$(".ipad a").mouseover(function(){
		$(".ipad a img").attr("src","img/icon/file_hover.png");
	});
	$(".ipad a").mouseout(function(){
		$(".ipad a img").attr("src","img/icon/file.png");
	});

// name card
	$(".card.back").click(function(){
		$(".card_dark_2").fadeIn();
		return false;
	});

	$(".card.front").click(function(){
		$(".card_dark_1").fadeIn();
		return false;
	});

	$(".card_dark").click(function(){
		$(".card_dark").fadeOut();
		return false;
	});

// logo

	$(".hover").click(function(){
		$(".logo_dark").fadeIn();
		return false;
	});
	$(".logo_dark").click(function(){
		$(".logo_dark").fadeOut();
		return false;
	});

	
	
	/*포폴*/
	//문제. 사이즈를 줄이고 늘일 때 새로고침을 해야만 적용됌, pc버전에서 클릭불가, 네비서클 더생기는 오류생김 (콘솔엔 오류 안뜸)
//	function resize_ev(){
//		var naviSize = $(window).width();
//		if(naviSize >= 1025){

			$('.portfolio').each(function(index)
			{
				$(this).attr('id', 'img' + (index + 1));
			});
				
			$('.portfolio').each(function(){
			  $('#navi').append('<div class="circle"></div>');
			});
			  
			$('.circle').each(function(index)
			{
				$(this).attr('id', 'circle' + (index + 1));
			});   
			   
			$('.portfolio').click(function(){
			if($(this).hasClass('opened')){
				$(this).removeClass('opened');
				$(".portfolio").fadeIn("fast");
				$("#navi div").removeClass("activenav");
				
			}
			else{
				var indexi = $("#maincontent .portfolio").index(this) + 1;
				$(this).addClass('opened'); 
				$(".portfolio").not(this).fadeOut("fast");
				$("#circle" + indexi).addClass('activenav'); 
				}
			});
	
//	}
//	resize_ev();
//	$(window).on(resize,function() {
//		resize_ev();
//	});


			//navi buttons
			$("#navi div").click(function() {
			if($(this).hasClass("activenav")){
				return false;
			}
					
				$("#navi div").removeClass("activenav");
				$(".portfolio").removeClass('opened');
				$(".portfolio").show();

				var index = $("#navi div").index(this) + 1;
				$("#img" + index).addClass('opened'); 
				$(".portfolio").not("#img" + index).fadeOut("fast");
					
				$(this).addClass("activenav");

			});

//		}

/////////////////////////////////////////////////



/*스크롤탑 이벤트*/
/*
	$(document).scroll(function(){
	var $top = $(document).scrollTop();
	console.log($top);
		$(".file_icon").click(function(){
			$("html, body").stop().animate({scrollTop: '1011'}, 285); 
			return false;
		});

	});
*/
/*
$(document).scroll(function(){
	var $hei = $(document).scrollTop();
	console.log($hei);
	if($hei > 103){
		$(".menu_frame .frame .menu").fadeOut();
	}else{
		$(".menu_frame .frame .menu").fadeIn();
	}
	$(".top_btn").click(function(){
		$("html, body").stop().animate({scrollTop: '0'}, 285);

		return false;
	});
});


*/

	/*
		function footer_fix(){
		var $win_h = $(window).height();
		console.log($win_h);
		var $body_h = $("body").height();
		console.log($body_h);

		if($body_h<=$win_h){
			$("footer").addClass("active_fix");
		}else{
			$("footer").removeClass("active_fix");
		}
	};


	function resize_ev(){
		var $win_h = $(window).height();
		$("section").css("height", $win_h);
	}
	resize_ev();
	$(window).resize(function(){
		resize_ev();
	});

	$(".box").each(function(){
		$(this).on("mousewheel DOMMousewheel", function(e){
		 // mousewheel 이벤트 : 크롬, 오페라, 익스엣지 적용
		 // DOMMousewheel 이벤트 : 파이어폭스, 익스9+
		 e.preventDefault(); // 초기화되는 부분을 방치
		 var delta = 0; // 브라우저가 로딩되면서 휠을 돌리지 않은 상태
		 if(!event){ //마우스 휠을 돌리지 않아서 휠 이벤트가 발생하지 않은 상태
			event=window.event //어떠한 이벤트도 발생하지 않았을 경우 윈도우의 브라우저 초기 로딩상태를 유지
		 }
		
		 //event.wheelDelta(크롬, 오페라, 익스엣지)
		 //마우스 휠을 한번 내렸을 경우 -120이라는 값을 가져옴
		 //마우스 휠을 한번 올렸을 경우 120이라는 값을 가져옴
		 
		 //event.detail(파이어폭수)
		 //파이어폭스에서는 휠을 내렸을 경우4
		 //파이어폭스에서는 휠을 올렸을 경우-4

		 
		 if (event.wheelDelta){ //
			delta = event.wheelDelta / 120;
			//휠을 내렸을 경우 -120 /120 = -1  //휠을 올렸을 경우 120 /120 = 1 
			console.log(event.wheelDelta);
			if (window.opera){delta = -delta} // 오페라 브라우저시 마우스 휠값을 역으로 반환
		 }else if(event.detail){ // 파이어폭스가 해당 
			delta = -event.detail / 4;
		 }
		 
		 var moveTo = null
			//마우스휳을 아래로 내렸을 경우
		 if(delta < 0){ // 마우스 휠을 내렸을 때, [음의 정수] 값을 받아오는 경우
			if($(this).next() != undefined){ // 다음으로 이동하려는 섹션(.box)가 존재한다면
			   moveTo = $(this).next().offset().top; // 다음 박스의 상단에 대한 절대 세로값을 저장
				//$("#v_sec_02").stop().animate({'opacity':'1'},700);

			}
			//마우스휠을 위로 올렸을 경우
		 }else{ //마우스휠을 위로 올렸을 때, [양의 정수]값을 받아오는 경우
			if($(this).next() != undefined){ // 다음으로 이동하려는 섹션(.box)가 존재한다면
			   moveTo = $(this).prev().offset().top; // 이전 박스의 상단에 대한 절대 세로값을 저장
			   //$("#v_sec_02").stop().animate({'opacity':'0'},500);
			}
		 }
			//동적인 움직임 구현
			$("html, body").stop().animate({scrollTop : moveTo + "px"}, {duration:1000, complate:function(){}}); // $("html, body").stop().animate({scrollTop : moveTo + "px"}, 시간) : 각 박스의 상단으로 이동시키는 부분 적용
	  
			});

		});

	*/



















});

