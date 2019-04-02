//check if given number is even
function isEven(x) {
	if(x%2==0) {
		return true
	}
	else {
		return false
	}
}

//return factorial of given number
function factorial(x) {
	var num = x;
	var fNum = x-1;

	while(x>=1) {
		num = num*fNum
		fNum--
		if(fNum==0) {
			return num
		}
	}

	if(x==0) {
		return 1
	}

}

//replacing "-" with "_"
function kebabToSnake(x) {
	return x.replace(/-/g, "_")
}