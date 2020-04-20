$(".navi").mouseenter(function (){
	$(this).find(".sub-wrap").stop().fadeIn(300);
});
$(".navi").mouseleave(function (){
	$(this).find(".sub-wrap").stop().fadeOut(300);
});
