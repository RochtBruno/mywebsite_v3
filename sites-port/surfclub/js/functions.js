$(function(){
    $('nav.mobile-menu i').click(function(){
        $(this).parent().find('ul').slideToggle();
    })
})

$(function(){
	$('nav a').click(function(){

		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	})
})