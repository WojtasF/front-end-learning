var movies = [
	{
		title: "In Bruges",
		rating: "5",
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: "4,5",
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: "5",
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: "3,5",
		hasWatched: false
	}
]

var x=0;
movies.forEach(function(mov) {
	if(movies[x].hasWatched==true) {
		console.log("You have seen \""+movies[x].title+ "\" - "+movies[x].rating+" stars");
		x++;
	} else{
		console.log("You have not seen \""+movies[x].title+ "\" - "+movies[x].rating+" stars");
		x++;
	}
})