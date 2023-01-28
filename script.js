/*
	WEB 303 Assignment 1 - jQuery
	Name: Jancy Patel
	Student Id- 0810153
*/	

$(document).ready(function() {

 
	$("#yearly-salary, #percent").on("change", function()
	
	//$("#yearly-salary, #percent").on("keyup", function()

	{
		var salary = $("#yearly-salary").val();
		var percent = $("#percent").val();
		var amount = salary * percent / 100;
		$("#amount").text("$" + amount).toFixed(2);
	
  	});

});

//Created 'change' event handler as it shows amount after pressing enter key.

//Created 'keyup' event handler as it shows amount after releases a key while typing.