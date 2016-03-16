$(document).ready(function(){
	SC.initialize({
		client_id: '398d032e2eef22230f666f001b8ba297',
		redirect_uri : 'http://localhost:8080/callback.html'
	});
	
	SC.connect().then(function() {
		return SC.get('/me');
	}).then(function(me) {
		var count = 0;
	
		SC.get('/tracks', {
			user_id : me.id
		}).then(function(params){
			updateTop(me);
			displayTracks(params, count);
		});
		count+10;
		
		$(window).on('scroll', function(){
			if( $(window).scrollTop() > $(document).height() - $(window).height() ) {
				displaytracks(params, count);
				count+10;
			}
		}).scroll();

	});
});

function updateTop(params){
	$(".soundcloud-username").html(params.username);
	$(".soundcloud-gravatar").attr("src", params.avatar_url);	
	$(".soundcloud-gravatar").show();	
	
}
