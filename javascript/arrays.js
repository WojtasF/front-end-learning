//function that print everything in arrays but in reverse
function printReverse(x) {
	var rev = x.reverse()
	rev.forEach(function(reversed) {
		console.log(reversed);
	});
}

//function that returns true if all elements in array are identical
function isUniform(x) {
	var fNum=x[0]
	var comp=[]

	x.forEach(function(isUni) {
		if(fNum===isUni) {
			comp.push(isUni)
		}
	})

	if(x.length===comp.length) {
		return true
	}
	else {
		return false
	}
}

//function that sum all numbers in array
function sumArray(x) {
	var answ = 0
	x.forEach(function(sum) {
		answ += sum;
	});
	return answ
}

//function that returns maximum number in array
function max(x) {
	var maxNum = 0
	x.forEach(function(max) {
		if(max>maxNum) {
			maxNum=max;
		}
	});
	return maxNum
}