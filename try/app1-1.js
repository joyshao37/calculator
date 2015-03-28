$(function(){

	var currentText ='';

$('#btn1').on('click',function(){

	//alert('hello jquery');
	//$('#message').text('睡覺'); //改變原本的文字
	//$('#message').addClass('green');
	currentText = currentText+'1';
	$('#message').text(currentText);

})

$('#btn2').on('click',function(){

	currentText = currentText+'2';
	$('#message').text(currentText);

})

$('#btnclear').on('click',function(){

	currentText = '';
	$('#message').text(currentText);

})



});      

//如果沒加$(); index會在第7行就執行完所有app.js的function$