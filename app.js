$(function(){

var btnNum=""; //0123456789
var currentText="";
var num1=0; 
var num2=0;
var operator; //紀錄符號

	
	


	//[數字鍵]



	function currentNumber(btnNum){

		currentText=currentText+btnNum;
	}

	function render()
	{
		$('#message').text(currentText);
	}


	//0
	$('#btn0').on('click',function(){


	currentNumber("0");
	render();

	})

	//1
	$('#btn1').on('click',function(){

	currentNumber("1");
	render();

	})

	//2
	$('#btn2').on('click',function(){

	currentNumber("2");
	render();

	})

	//3
	$('#btn3').on('click',function(){

	currentNumber("3");
	render();

	})

	//4
	$('#btn4').on('click',function(){

	currentNumber("4");
	render();

	})

	//5
	$('#btn5').on('click',function(){

	currentNumber("5");
	render();

	})

	//6
	$('#btn6').on('click',function(){

	currentNumber("6");
	render();

	})

	//7
	$('#btn7').on('click',function(){

	currentNumber("7");
	render();

	})

	//8
	$('#btn8').on('click',function(){

	currentNumber("8");
	render();

	})

	//9
	$('#btn9').on('click',function(){

	currentNumber("9");
	render();

	})

	//.
	$('#btnDot').on('click',function(){

	currentNumber(".");
	render();

	})



	//Cancel
	$('#btnC').on('click',function(){

	currentText="";
	num1=0;
	num2=0
	operator="";
	render();

	})





	

	//[運算子]


	//加

	$('#btnAdd').on('click',function(){

		currentToNum();
		operator="+";
	})

	//減

		$('#btnMinus').on('click',function(){

		//判斷負號
		if(currentText==""){

		currentText="-"+currentText;
		render();
		
		}

		//判斷減號		
		else{

		currentToNum();
		operator="-";
		
		}

		
	})

	//乘
		$('#btnMultiply').on('click',function(){
		
		currentToNum();		
		operator="*";
	})

	//除

		$('#btnDivide').on('click',function(){
		
		currentToNum();
		operator="/";

	})

	//Equal
	$('#btnEqual').on('click',function(){

		currentToNum();

	})
	





	//[運算]	

	//將currentText值暫存到num1和num2
	function currentToNum(){

			
		if (num1 == 0){

		num1=parseFloat(currentText);

		}
 
		else if (num1 !== 0) {


			if(currentText==""){


				num2=num1;
				num1=0;
				
			}

			else

			num2=parseFloat(currentText);

			}
		
		currentText="";
		equal();

	
		}

	

	function equal(){

		switch(operator){

		case '+':
		num1=num1+num2;
		
		break;

		case '-':
		num1=num1-num2;

		break;

		case '*':
		num1=num1*num2;
		break;

		case '/':
		num1=num1/num2;
		break;

		}
		
		$('#message').text(num1);


	}











	});

