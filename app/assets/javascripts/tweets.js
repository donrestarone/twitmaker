// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(event){
	var form = document.getElementById('new_tweet');

	form.addEventListener('submit', function(event){
		event.preventDefault();
		
		$.ajax({
			url: form.getAttribute('action'),
			method: form.getAttribute('method'),
			dataType: 'json',
			data: $(form).serialize(),
		}).done(function(data){
			console.log(data.tweet);
			var tweetText = (data.tweet);
			var tweetList = document.querySelector('.tweets');

			var tweet = document.createElement('li');
			var tweetPTag = document.createElement('p');
			tweetPTag.innerText = tweetText;
			//tweetTime.innerText = (data.time);
			var tweetTime = document.createElement('time');

			tweet.append(tweetPTag, tweetTime);
			$(tweetList).append(tweet);

			console.log('ajax call successful');
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR + textStatus + errorThrown);
		})
	});



});


