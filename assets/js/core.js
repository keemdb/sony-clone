var nav = document.querySelector(".nav");
var menuList = document.querySelectorAll(".nav ul li");
var sectionList = document.querySelectorAll('section');

for (var i = 0; i < menuList.length; i++) {
	menuList[i].onclick = function (){
		window.scroll({top: sectionList[i].offsetTop, behavior: 'smooth'});
	}
}




//배너 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
	},
});

//추천상품 이미지 슬라이드
var swiper = new Swiper('.swiper-container2',{
	slidesPerView: 4,
	spaceBetween: 24,
//            mousewheel: {
//                invert: true,
//            },
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	autoplay: {
		delay: 6000,
	},
	breakpoints: {
		600: {
			slidesPerView: 1.4,
			spaceBetween: 24
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 24
		},
		960: {
			slidesPerView: 3,
			spaceBetween: 24
		}
	}
});

//추천상품 탭 메뉴
var movBtn = $(".product_title > ul > li");    
var movCont = $(".product_chart > div");  

movCont.hide().eq(0).show();

movBtn.click(function(e){
	e.preventDefault();
	var target = $(this);         
	var index = target.index();  
	movBtn.removeClass("active");   
	target.addClass("active");    
	movCont.css("display","none");
	movCont.eq(index).css("display","block");
});

//공지사항 탭 메뉴
var tabMenu = $(".notice");

//컨텐츠 내용 토글
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
	e.preventDefault();
	var target = $(this);
	target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);

//탑버튼
var topBtn = document.querySelector('.top_btn_wrap .top_btn');

window.addEventListener("scroll", function(e){
	var scrollY = this.scrollY;
	if(scrollY < 100){
		topBtn.style.opacity = 0;
	} else {
		topBtn.style.opacity = 1;
	}
});

topBtn.addEventListener('click', function (){
	window.scroll({top: 0, behavior: 'smooth'});
});

//햄버거버튼 토글
var mNav = document.querySelector("#mNav");

mNav.addEventListener("click", function(){
	var hamBtn = document.querySelector(".ham");
	hamBtn.classList.toggle("active");
	nav.classList.toggle("active");
});