$(document).ready(function(){

function somettt()
{

}


$("#fb").load("fb-login.html", function(){
	$(".regsubmit").click(function(){
		$(".fb-reg-modal").css("left" , "-100%").hide(100);
	})
});




});