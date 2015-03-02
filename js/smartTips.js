// Document ready
$(function() {

});
// end document ready

// Our list of terms and their corresponding definitions
var definitions = {
	tooltips : "Messages that appear when a cursor is positioned over a term, icon, image, hyperlink, or other element in a graphical user interface.",
	smarttips: "The smart and easy tooltip generator",
  'web project': "You just have to include the smartTips.js script",
  plugin : "In computing, a plug-in (or add-in / addin, plugin, extension or add-on / addon) is a software component that adds a specific feature to an existing application. When an application supports plug-ins, it enables customization.",
  ' is that' : "Answer: pretty effing cool!",
  'corresponding text' : "You just put in the term and the definition. The plugin does the rest",
  'romanmahar' : "Professional alias and anagram for OmarRahman, creator of this plugin",
  webpage : "A web page (or webpage) is a web document that is suitable for the World Wide Web and the web browser.",
  'class of .smarttip' : "The default class that is applied to the span that surrounds the word. This lets you style the smartTip however you want",
  '.smarttip ' : "The span class surrounding each of the definition words",
  '.tooltip ' : "the class of the tooltip popup",
  ' tooltip ' : "One of these"
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
// within 'h1', 'p', 'ol li', and 'a' elements
// You can choose to look for strings in just 'p' or 
// anything that you would like to search in
$('p, h1, ol li, a').wrapInTag({
  tag: 'span class="smartTip"',
  // applies Span tag to strings that match definitions.
  definitions : definitions
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

