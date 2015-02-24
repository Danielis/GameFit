var client_id = "98d9e7e5945645b696e6b915e7a0fa81";
var client_secret = "002d21fc082a4bef8efa05e73233847c";
var grant_type = "authorization_code";
var request_url = "https://runkeeper.com/apps/token";
var response_type = "code";
var redirect_uri = "http://localhost:3000/apiReturnPage.html";

var userAccessToken = "";

var href = window.location.search;
var params = href.split("=");
var code = params[2];
var state = params[1].replace("&code","");

function getToken(){
	return $.ajax({
		url: request_url,
		type:'POST',
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded',
		data: {
			client_id: client_id,
			client_secret: client_secret,
			grant_type: grant_type,
			redirect_uri: redirect_uri,
			code: code
		}
	});
}

function getUser(token){
	console.log("Response for token");
	console.log(token);
	return $.ajax({
		url: "https://api.runkeeper.com/user/",
		type: 'GET',
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded', //application/vnd.com.runkeeper.Profile+json
		data: {
			access_token: token
		}
	});
}

function getUserResource(term){
	console.log("Term");
	console.log(term);
	return $.ajax({
		url: "https://api.runkeeper.com"+term+"/",
		type: 'GET',
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded', //application/vnd.com.runkeeper.Profile+json
		data: {
			access_token: userAccessToken
		}
	});
}

$(document).ready(function(){
	console.log("returned");

    var promise = getToken();

    promise.done(function(response){
    	userAccessToken = response.access_token;

    	var promise2 = getUser(userAccessToken);

    	promise2.done(function(response2){
  			console.log(response2);
  			var promise3 = getUserResource(response2.weight);

  			promise3.done(function(response3){
  				console.log(response3);
  			});

  		});
    });

});