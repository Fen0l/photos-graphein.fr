var content = document.getElementsByClassName('post-content')[0];

if (content != null)
	var img = content.getElementsByTagName('img')[0];

console.log(img);
$(img).click(function() {
	$.fancybox.open(
		[
			{
				src  : img.src,
				opts : {caption : ''}
			}
		],
		{
			loop : false,  
			protect: true, 
			margin : [20, 0], 
			clickContent : function( current, event ) { 
				return current.type === 'image' ? 'close' : false;
			},
		}
	);
});
