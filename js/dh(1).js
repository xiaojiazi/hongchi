// JavaScript Document
//µ¼º½Ð§¹û£¨¼æÈÝIE6£©
$(function(){
	   $("#navigation ul li:has(ul)").hover(function(){
			$(this).children("ul").stop(true,true).slideDown(100);
        },function(){
		    $(this).children("ul").stop(true,true).slideUp("fast");
		});
	   $("#navigation ul li").hover(
	  function () {
		$(this).addClass("hs");
	  },
	  function () {
		$(this).removeClass("hs");
	  }
	);	   
	   
	  
	   
})