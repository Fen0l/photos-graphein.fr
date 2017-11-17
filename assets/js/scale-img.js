
	$("[data-fancybox]").fancybox({

	});


var content = document.getElementsByClassName('post-content')[0];
if (content != null)
var img = content.getElementsByTagName('img')[0];
var instance = $.fancybox.open(
	// Your content and options
);

$( img ).click(function() {
  $.fancybox.open( [{src  : img.src,opts : {caption : ''	}}],
                    {loop : false,  protect: true, margin : [20, 0], clickContent : function( current, event ) { return current.type === 'image' ? false : false; },}
                  );
});
