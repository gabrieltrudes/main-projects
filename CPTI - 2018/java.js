$(document).ready( function(){ 

	$('#btn_info').mouseover ( function(){ 
	
		$('#icon_ama').hide();
		$('#icon_azu').show();

	});

	$('#btn_info').mouseleave ( function(){ 
	
		$('#icon_azu').hide();
		$('#icon_ama').show();

	});

	$('#in_div').mouseover( function(){ 

		$('#in').hide();
		$('#inhover').show();

	});

	$('#fb_div').mouseover( function(){ 

		$('#fb').hide();
		$('#fbhover').show();


	});

	$('#yt_div').mouseover( function(){ 

		$('#yt').hide();
		$('#ythover').show();


	});

	$('#li_div').mouseover( function(){ 

		$('#li').hide();
		$('#lihover').show();


	});

	$('#in_div').mouseleave( function(){ 

		$('#inhover').hide();
		$('#in').show();


	});

	$('#fb_div').mouseleave( function(){ 

		$('#fbhover').hide();
		$('#fb').show();


	});

	$('#yt_div').mouseleave( function(){ 

		$('#ythover').hide();
		$('#yt').show();


	});

	$('#li_div').mouseleave( function(){ 

		$('#lihover').hide();
		$('#li').show();


	});
});