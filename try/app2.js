console.log('hello js');

var b=1;

console.log(b);

b=b+6;

console.log(3%6);
console.log(3=='6');   //==不會比較型別 所以答案還是true  //比value要===

var a='123';
a=a+'ben';
console.log(a);


//array
var numbers =[1,2,3,4,5];
numbers[2];


var numbersc =[1,'123',{foo:"bar"}];


//anounced object
var person={}; //announed empty object
var person2={
	name: 'ben'
};

person2.gender='male';
console.log(person2);
//if

if(person2.gender==='male'){
	console.log('ben is male');
}
else
{
	console.log('ben is female');
}

//for-loop
for(var i=1;i<=10;i++){

	console.log(i);
}
console.log(i); // answer is 11


//function
a=2;
b=1;
function add (a,b){
	var c=6;       // the scope of c only exists in this function
	return a+b;
}
console.log(add(3,7));