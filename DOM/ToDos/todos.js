var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})
	lis[i].addEventListener("click", function(){
		if(this.class != "done"){
			this.classList.add("done");
		} else{
			this.classList.remove("done");
		}
	})
}