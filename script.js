

var multiplesOf3nad5 = function(number){
	number = document.getElementById("multiple").value;
	var sum = 0;
	for(var i=0; i<number; i++){
		if((i%3 === 0) || (i%5 === 0)){
			sum+=i;	
		};
	};
	document.getElementById("result1").innerHTML = sum;
};


var fibonacci4k = function(max){
	max = document.getElementById("maximum").value;
	var first = 1;
	var second = 2;
	var sum = second;

	while(second<max){
		var next = first + second;
		if (next%2===0) {
			sum+=next;
		}
		first = second;
		second = next;
	}
	document.getElementById("result2").innerHTML = sum;
};


var largestPrime = function(num) {
	num = document.getElementById("number").value;
	var factors = [];
	var i = 2;
	while (num > 1)
	{
		while (num % i === 0)
		{
			factors.push(i);
			num /= i;

		}
		i += 1;

	}
	document.getElementById("result3").innerHTML = factors[factors.length-1]; 
};






