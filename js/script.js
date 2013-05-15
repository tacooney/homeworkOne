/**
 * @author tacooney
 */
$(document).ready(function(){
	$.get("content/berries.html", function(data){
$('#rotate').html(data);
});

	
	$("nav a").click(function(e){
		//alert($(this).html().toLowerCase());
		var txtName = $(this).html().toLowerCase();
		$.get("content/" + txtName + ".html", function(data){
			$('#rotate').html(data);
		});
		
	})

});
