// Document ready
$(function() {

});
// end document ready


// This function will find the strings in "words :" and surround them with a span tag
$.fn.wrapInTag = function(opts) {
  
  var tag = opts.tag || 'strong',
      words = opts.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +'>$&</'+ tag +'>';
  
  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

$('p').wrapInTag({
  tag: 'span class="jargon"',
  words: ['world', 'and red', 'Lorem', 'i ']
});

/* 
The following comments/notes were written by Ryan while he sat with me. 
Ryan presents another way of doing this. 
By creating a variable 'defs' and using bracket notation 
I should be able to call the right text in the tooltip
*/
// var defs = {
// 	apple : "a fruit red or green",
// var text = $(this).text(); 
// def[text] 
// Would return value for apple key in object


// On the note of what's written above I will next have to figure out how to define and store these terms

// Next the following function is to make a tooltip div show up on hover
$('span.jargon').on('mouseenter', function(){
	$(this).addClass('animate');
	var tip = $('<div>').addClass('tooltip').fadeIn( 1000 );
	$(this).append(tip);
// this chains another .on event 
}).on('mouseleave', function (){
	console.log("hi!");
	$(this).removeClass('animate');
	$(this).find(".tooltip").fadeOut(600, function(){	
	$(this).find("div.tooltip").remove();
	console.log("no Wayyy!!!!");
	});
});

 $( "#book" ).fadeOut( "slow", function() {
    // Animation complete.
  });

// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });

// .animate({
// 	opacity: 1
// }, 1000)

/*

musicApp.displaySongs = function(result){
	$('#artwork').html('');
	console.log("Ready to try displaying pieces");
	var songs = result.response.songs;
	// we now have an array of pieces, we need to loop through each one and display them
	// this will incrementally display them
	for(var i = 0; i < songs.length; i++){
		// create html element div with a class of piece
		var div = $('<div>').addClass('piece');
		// create an h2 element and set the title to be the current work title
		var h2 = $('<h2>').text(songs[i].title);
		// create a p with the class of artist and set the text to be artist
		var p = $('<p>').text(songs[i].artist_name).addClass('artist');
			div.append(h2,p);
			$('#artwork').append(div);

		// check if theres an image.... and if there is create it and specify the source
		// if(pieces[i].webImage){
		// 	var image = $('<img>').attr('src',pieces[i].webImage.url);
		// // put the image in the place
		// div.append(image);
		// }
		
	} // end for loop
} // end musicApp.displayPieces();

*/