/**
 * Copyright (c) 2012 Dennis Hall <https://github.com/dennishall>.
 * All rights reserved.  Use of this source code is governed by the MIT license.
**/

(function(){

	// fix the query string, "bk=ec;chp=4;vs=9" is invalid and causes the hash ("bookmark") to be ignored (only in chrome, only for some books of the Bible)
	if(location.search.indexOf(';') != -1){
		location.search = location.search.replace(';','&');
	}

	var vs = location.search.replace(/.*vs=([^;&]+).*/, "$1");
	if(vs){
		var vss = vs.split('-');
		var a = 1*vss.shift();
		var b = 1*vss.shift() || a;
		for(var i=a; i<=b; i++){
			var span = document.getElementById('vs'+i);
			// could be simpler if we don't bother highlighting verse # also.
			var link = span.previousSibling;
			// account for text nodes
			while(link.nodeType != 1){
				link = link.previousSibling;
			}
			// light yellow
			span.style.background = "#ff7";
			link.style.background = "#ff7";
		}
	}


})();