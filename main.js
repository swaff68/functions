var square = function(x,y,z) {
	return (x * y)/z;
};

// var result = square(3,4,4);
// alert(result);

// or

alert(square(3,4,4))

var square = function(x){
	return x * x;
};

var cube = function(x){
	return x * square(x);
};

alert(cube(4));

var input = "loren";

var isEmpty = function(s){
	return s.length === 0;
};

var inputIsEmpty = isEmpty(input);
alert(inputIsEmpty)


var pluralize = function(word,number){
	if(number===1){
		return word;
	}
	else {
		return word + "s";
	}
};

var isValidNumber = function(x){
	var max = 100;
	return x <=100;
};

var max = 75;
var isValid = isValidNumber(80)
;

alert(max);
alert(isValid);