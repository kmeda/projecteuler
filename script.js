

var multiplesOf3nad5 = function(number){
	var sum = 0;
	for(var i=0; i<1000; i++){
		if((i%3 === 0) || (i%5 === 0)){
			sum+=i;	
		};
	};
	return sum;
};
console.log(multiplesOf3nad5(1000))



var fibonacci4k = function(max){
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
	return sum;
};

console.log(fibonacci4k(4000000))


var largestPrime = function(num) {
	var factors = [];
	var i = 2;
	while (num > 1)
	{
		console.log(num);
		while (num % i === 0)
		{
			factors.push(i);
			num /= i;
			console.log("Caught: " +i);
		}
		i += 1;

	}
	console.log(factors)
	return factors[factors.length-1]; 
}
largestPrime(600851475143)





