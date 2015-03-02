// Javascript Code.
var num = [];
var Song = [];
var ImageAlbum = [];
var NameArtist = [];
var Playcounts = [];
var Duration = [];
var ArtistBiography = [];
var Listeners = [];
var PlaySong = [];
var OrderName = [];
var OrderDuration = [];
var OrderPlayCount = [];


$(document).ready(function() {
	function deMenorAMayor(elem1, elem2) {
		return elem1-elem2;
	}
	function deMayorAMenor(elem1, elem2) {
		return elem2-elem1;
	}
	function displaylist(i){
		var no = i + 1;
		$(".display").append("<tr> "+ 
								"<td class =\"num\"> "+ no +"</td>"+
								"<td class =\"song\"> "+ Song[i] +"</td>"+
								"<td class =\"image\"> <img src=\""+ ImageAlbum[i] +"\" alt=\"ImgDisk\"/></td>"+
								"<td class =\"artist\"> <a href =\""+ArtistBiography[i]+"\" target=\"blank\">"+ NameArtist[i] +"</a></td>"+
								"<td class =\"playcount\"> "+ Playcounts[i] +"</td>"+
								"<td class =\"duration\"> "+ Duration[i] +"</td>"+
								"<td class =\"play\"> <a href =\""+PlaySong[i]+"\" target=\"blank\"><img src=\"http://www.clipartbest.com/cliparts/aiq/egx/aiqegxpAT.png\" class = \"playImage\"> </a> </td>");
	};

	jQuery(document).ready(function($) { 
      	$.ajax({ 
	        url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=fc2665a2795896f51aa91ac935720d6b&format=json", 
	        dataType : "jsonp",
	        success : function(parse_music) {
	        	for (var i = 0; i < 50; i++) {

			        OrderName.push(parse_music["tracks"]["track"][i]["name"]);
			        OrderDuration.push(parse_music["tracks"]["track"][i]["duration"]);
			        OrderPlayCount.push(parse_music["tracks"]["track"][i]["playcount"]);

			        //Song
			        Song.push(parse_music["tracks"]["track"][i]["name"]);

			        //Listenrs
			        Listeners.push(parse_music["tracks"]["track"][i]["listeners"]);

			        //Artist
			        NameArtist.push(parse_music["tracks"]["track"][i]["artist"]["name"]);

			        //SongDuration
			        Duration.push(parse_music["tracks"]["track"][i]["duration"]);

			        //Biography
			        ArtistBiography.push(parse_music["tracks"]["track"][i]["artist"]["url"]);

			        //Play
			        Playcounts.push(parse_music["tracks"]["track"][i]["playcount"]);

			        //Play
			        PlaySong.push(parse_music["tracks"]["track"][i]["url"]);

			        try {
			        	//Album
			        	ImageAlbum.push(parse_music["tracks"]["track"][i]["image"][2]["#text"]);}
        			catch(err){
        				ImageAlbum.push("http://th07.deviantart.net/fs70/150/f/2011/008/9/f/token_like_aimp_icon_by_ri_cule-d36ov6u.png");}
        			//displaylist(i);
	        };
    	}
    });
	});
	
	/*Order for Duration Up - Down*/
	$(".ForDurationUp").click(function() {
		$('.display').empty();
		console.log("click");
		OrderDuration.sort(deMayorAMenor);

		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Duration[x]);
				console.log(OrderDuration[i]);

				if (Duration[x] === OrderDuration[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});

	/*Order for Duration Down - Up*/
	$(".ForDurationDown").click(function() {
		$('.display').empty();
		console.log("click");
		OrderDuration.sort(deMenorAMayor);

		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Duration[x]);
				console.log(OrderDuration[i]);

				if (Duration[x] === OrderDuration[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});

	/*Order for PlayCount Up - Down*/
	$(".ForPlaycountUp").click(function() {
		$('.display').empty();
		console.log("click");
		OrderPlayCount.sort(deMayorAMenor);

		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Playcounts[x]);
				console.log(OrderPlayCount[i]);

				if (Playcounts[x] === OrderPlayCount[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});

	/*Order for PlayCount Down - Up*/
	$(".ForPlaycountDown").click(function() {
		$('.display').empty();
		console.log("click");
		OrderPlayCount.sort(deMenorAMayor);

		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Playcounts[x]);
				console.log(OrderPlayCount[i]);

				if (Playcounts[x] === OrderPlayCount[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});
	
	/*Order for Song A-Z*/
	$(".ForSongAZ").click(function() {
		$('.display').empty();
		console.log("nombre AZ");
		OrderName.sort(); 
		console.log(Song);
		//OrderName.reverse();
		console.log(OrderName);
		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Song[x]);
				console.log(OrderName[i]);

				if (Song[x] === OrderName[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});

	/*Order for Song Z-A*/
	$(".ForSongZA").click(function() {
		$('.display').empty();
		console.log("nombre ZA");
		OrderName.sort();
		OrderName.reverse(); 
		console.log(Song);
		console.log(OrderName);
		for (var i = 0; i < 50; i++) {
			for (var x = 0; x < 50; x++){
				console.log(Song[x]);
				console.log(OrderName[i]);

				if (Song[x] === OrderName[i]){
					console.log("-------IGUALES-------");
					displaylist(x);
				}
				console.log("****FIN IMPRESION *****");
			}
		}
	});

	/*Dell Filters*/
	$(".Dell").click(function() {
		$('.display').empty();
		console.log("click");
		for (var i = 0; i < 50; i++) {

			displaylist(i);
		}
	});

});