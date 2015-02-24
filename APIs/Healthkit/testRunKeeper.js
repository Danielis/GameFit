
var client_id = "98d9e7e5945645b696e6b915e7a0fa81";
var request_url = "https://runkeeper.com/apps/authorize";
var response_type = "code";
var redirect_uri = "http://localhost:3000/apiReturnPage.html";
var state = "0";

function requestToken(){
	window.location.href = request_url+"?client_id="+client_id+"&response_type="+response_type+"&redirect_uri="+redirect_uri+"&state="+state;
};


$(document).ready(function(){
	$("#test").click( function(){
	    requestToken();
	});
});