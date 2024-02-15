// Scrollbar disappear
var prevScrollPos = window.scrollY
window.onscroll = function() {
	scroll();
 };
 
 function scroll() {
	var currentScrollPos = window.scrollY
	if (
		prevScrollPos < currentScrollPos
	) {
	   document.getElementById("hubWrapper").style.top = "-75px";
	   prevScrollPos = currentScrollPos
	} else {
	   document.getElementById("hubWrapper").style.top = "0";
	   prevScrollPos = currentScrollPos
	}
 }



// Slide containers!

$(function(){
	/*make sure the first element shows up*/
	$('.slides_container .slide:first-child').addClass("active");
	var interval = 10000,
     active_slide = 0,
     dom_slides = $('.slides_container .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

// 

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerLeft .slide:first-child').addClass("active");
	var interval = 12000,
     active_slide = 0,
     dom_slides = $('.slides_containerLeft .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

// 

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerLeft1 .slide:first-child').addClass("active");
	var interval = 12000,
     active_slide = 0,
     dom_slides = $('.slides_containerLeft1 .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

// 

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerLeft2 .slide:first-child').addClass("active");
	var interval = 12000,
     active_slide = 0,
     dom_slides = $('.slides_containerLeft2 .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

// 

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerLeft3 .slide:first-child').addClass("active");
	var interval = 12000,
     active_slide = 0,
     dom_slides = $('.slides_containerLeft3 .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});
// 

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerRight .slide:first-child').addClass("active");
	var interval = 8000,
     active_slide = 0,
     dom_slides = $('.slides_containerRight .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerRight1 .slide:first-child').addClass("active");
	var interval = 8000,
     active_slide = 0,
     dom_slides = $('.slides_containerRight1 .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});

$(function(){
	/*make sure the first element shows up*/
	$('.slides_containerRight2 .slide:first-child').addClass("active");
	var interval = 8000,
     active_slide = 0,
     dom_slides = $('.slides_containerRight2 .slide'),
     num_slides = dom_slides.length;
	setInterval(function(){
		++active_slide;
		if((active_slide = active_slide%num_slides)<0) active_slide+=num_slides;
		dom_slides.removeClass('active').eq(active_slide).addClass('active');
	},interval);
});