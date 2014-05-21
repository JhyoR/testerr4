$(document).ready(function(){

function somettt()
{
$(".regsubmit").click(function(){
		$(".fb-reg-modal").css("left" , "-100%").hide(100);
		return false;
	});
}


$("#fb").load("fb-login.html", function(e){
	somettt();
	
});




});