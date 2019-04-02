todos = [];

while(action != "quit") {
	var action = prompt("What would you like to do?");
	if(action=="new") {
		var newtd = (prompt("Enter new todo:"));
		todos.push(newtd)
		console.log(newtd + " added to list")
	}
	else if(action=="list") {
		count = 0;
		console.log("**********");
		todos.forEach(function(todo){
			console.log("#"+count+" "+todo);
			count++;
		});		
		console.log("**********");
	}
	else if(action=="delete") {
		var del = (prompt("Enter index of item you want to delete:"))
		todos.splice(del, 1)
		console.log("Deleted Todo")
	}
}
alert("Bye!")