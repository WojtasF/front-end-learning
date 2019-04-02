//mark todo as completed
$(document).on("click", "li", function(){
	$(this).toggleClass("completed")
});

//make X button delete todo
$(document).on("click", ".thrash", function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	e.stopPropagation();
})

//make new todo
$("#new").keypress(function(e){
	if(e.which === 13){
		if($(this).val() !== ""){
			$("ul").append("<li><span class=\"thrash\"><i class=\"fas fa-trash-alt\"></i></span>"+ $("#new").val() +"</li>");
			$(this).val("");
		}
	}
});

//make plus button work
$("h1 i").click(function(){
	$("#new").fadeToggle();
})