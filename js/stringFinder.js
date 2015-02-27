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
  words: ['world', 'and red', 'Lorem', 'qui', 'smartTips']
});


$.fn.appendTrademark = function(tm) {
  
  var tag = tm.tag || 'strong',
      words = tm.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +'>$&</'+ tag +'>';
  
  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

$('span.jargon').appendTrademark({
  tag: 'span class="trademark"',
  words: ['smartTips']
});




// $('p').wrapInTag({
//   tag: 'span class="jargon"',
//   words: definitions
// });

var definitions = {
	lorem : "A genuine mark of class",
	qui : "Icy and unforgiving",
	smarttips: "This is this thingy"
}

/* If I'm correct... which I'm probably not... 
then this should save the smartTipText var as the text*/
// var smartTipText = $('definitions').text();

// I am missing a function that looks for text.this and stuff
// var str = $( "p:first" ).text();
// $( "p:last" ).html( str );


$('span.jargon').on('mouseenter', function(){
	$(this).addClass('animate');
	var tip = $('<div>').addClass('tooltip').fadeIn( 300 );
	// this next line is meant to store the string within span so that we can search it
	var thisString = $(this).text().toLowerCase();
	console.log(thisString);
	$(this).append(tip.text(definitions[thisString]));

// this chains another .on event 
}).on('mouseleave', function (){
	console.log("hi!");
	$(this).removeClass('animate');
	$(this).find(".tooltip").remove();
});



// var employees = [
//     {"firstName":"John", "lastName":"Doe"},
//     {"firstName":"Anna", "lastName":"Smith"},
//     {"firstName":"Peter","lastName": "Jones"}
// ];

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