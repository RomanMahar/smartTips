// Document ready
$(function() {

});
// end document ready

// Our list of terms and their corresponding definitions
var definitions = {
	lorem : "A mark of class",
	tooltip : "a message that appears when a cursor is positioned over an icon, image, hyperlink, or other element in a graphical user interface.",
	smarttips: "smartTips is not a registered trademark.",
  'web project': "You just have to include the smartTips.js script"
}

// This function will find the strings in "words :" and surround them with a span tag
$.fn.wrapInTag = function(opts) {
  
  var tag = opts.tag || 'strong',
  // Here we are passing the 'Keys' from the definitions object
      words = Object.keys(opts.definitions) || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +'>$&</'+ tag +'>';
  
  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

// for this demo file I have chosen to select strings 
// within <h1 /> elements as well a <p /> elements
// You can choose to look for strings in just <p /> or 
// anything that you would like to search in really elements
$('p, h1').wrapInTag({
  tag: 'span class="smartTip"',
  // applies Span tag to strings that match definitions.
  definitions : definitions
});


// this will search in the span.smartTip and append the adds the trademark class to it.
$.fn.appendTrademark = function(tm) {
  
  var tag = tm.tag || 'strong',
      words = tm.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +'>$&</'+ tag +'>';
  
  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

$('span.smartTip').appendTrademark({
  tag: 'span class="trademark"',
  words: ['smartTips']
});



// This activates the tooltip when the mouse enters the smartTip span
$('span.smartTip').on('mouseenter', function(){
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

